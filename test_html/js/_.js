


function generateLotto(){

    
    const fixedNum = document.getElementById('fixedNums').value  //"2,7,10"
    const counts = parseInt(document.getElementById('counts').value,10)
    const resultDiv = document.getElementById('result')
    
    let html = "<h3>생성번호</h3>"
    const fixedNums = fixedNum ? fixedNum.split(',').map((num)=>(
        parseInt(num.trim()) 
    )) : [];

    if (fixedNums.length > 6) {
        alert("고정번호는 최대 6개까지 입력 가능합니다.");
        return;
    }

    // if (fixedNums.some(num => isNaN(num) || num < 1 || num > 45)) {
    //     alert("1~45 사이의 숫자만 입력하세요.");
    //     return;
    // }

    for ( let i=0 ; i < counts ; i++) {  //오천원 5번

        let halfLotto = new Set(fixedNums); //중복되지않는 주머니


        while( halfLotto.size < 6){  //6개가될때까지..
            
            let lotto = Math.floor( Math.random() * 45) + 1;

            halfLotto.add(lotto);
          
        }

            let rowLotto = Array.from(lottos).sort((a,b)=> a-b);

            html += `<p>${rowLotto.join(', ')}</p>`;
    
        }
                resultDiv.innerHTML = html;
}
