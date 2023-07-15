
function quotes() {
    var prevNum = 0;
    var arrayQuotes = [
        {
            quote: '“A room without books is like a body without a soul.”',
            writer: '― Marcus Tullius Cicero'
        },
        {
            quote: '“Be yourself; everyone else is already taken.”',
            writer: '― Oscar Wilde'
        },
        {
            quote: '“So many books, so little time.”',
            writer: '― Frank Zappa'
        },
        {
            quote: '“You only live once, but if you do it right, once is enough.”',
            writer: '― Mae West'
        },
        {
            quote: '“Be the change that you wish to see in the world.”',
            writer: '― Mahatma Gandhi',
        },
        {
            quote: '“If you tell the truth, you donot have to remember anything.”',
            writer: '― Mark Twain'
        },
        {
            quote: '“Always forgive your enemies; nothing annoys them so much.”',
            writer: '― Oscar Wilde'
        },
        {
            quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
            writer: '― Mahatma Gandhi'
        },
        {
            quote: '“Without music, life would be a mistake.”',
            writer: '― Friedrich Nietzsche'
        },
        {
            quote: '“A friend is someone who knows all about you and still loves you.”',
            writer: '― Elbert Hubbard'
        }
    ]

    var num = Math.floor(Math.random() * 10);
    // to handle repetition case 
    if (prevNum == 0) {
        prevNum = num
        document.getElementById('quote').innerHTML = arrayQuotes[num].quote
        document.getElementById('writer').innerHTML = arrayQuotes[num].writer
        return 0;
    }
    else {
        while (true) {
            if (prevNum == num) {
                num = Math.floor(Math.random() * 10);
            }
            else {
                prevNum = num
                document.getElementById('quote').innerHTML = arrayQuotes[num].quote
                document.getElementById('writer').innerHTML = arrayQuotes[num].writer
                break
            }

        }

    }
    return num
}
