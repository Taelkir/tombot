const responses = require('./responses.js');
const utilities = require('./utilities.js');
const mockSend = jest.fn();
const outputRandomSample = true;

function createMockMessage(text) {
    return {
        content: text,
        channel: {
            send: mockSend
        }
    };
};

afterEach(() => {
    jest.clearAllMocks();
})

describe("hmm response", () => {
    function callWithText(text) {
        const message = createMockMessage(text);
        const cleanedMessage = utilities.parseMessage(message);
        responses.hmmm(message, cleanedMessage);
    }

    test("detects only whole word hms", () => {
        callWithText("why h");
        expect(mockSend).toHaveBeenCalledTimes(0);
        callWithText(" hm");
        expect(mockSend).toHaveBeenCalledTimes(1);
        callWithText("oh hmm");
        expect(mockSend).toHaveBeenCalledTimes(2);
        callWithText("well h m");
        expect(mockSend).toHaveBeenCalledTimes(2);
        callWithText("ohm's law");
        expect(mockSend).toHaveBeenCalledTimes(2);
        callWithText("hmong diaspora");
        expect(mockSend).toHaveBeenCalledTimes(2);
    })

    test('responds with exactly one more m than the input data has', () => {
        callWithText('lorem hm ipsum');
        expect(mockSend).toHaveBeenCalled();
        expect(mockSend.mock.calls[0][0].startsWith('Hmm')).toBe(true);
        expect(mockSend.mock.calls[0][0].startsWith('Hmmm')).toBe(false);
    })

    test('imitates punctuation when given the opportunity', () => {
        callWithText("hm adfs!");
        expect(mockSend.mock.calls[0][0].endsWith('!')).toBe(true);
        callWithText("asdfasdf hmm...");
        expect(mockSend.mock.calls[1][0].endsWith('...')).toBe(true);
    })

    if(outputRandomSample){
        test('sample responses randomly', () => {
            for(let i=0; i<30; i++) {
                callWithText("well hmmmm");
                console.log('sent:', mockSend.mock.calls[i][0]);
            }
        })
    }
})