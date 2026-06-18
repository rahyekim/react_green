
function generateLotto() {

    const fixedInput = document.getElementById('fixedNumbers').value ;
    const count = parseInt(document.getElementById('comboCount').value) ; 
    //문자를 숫자로 바꿔주는 도구-> 파싱
    const resultDiv = document.getElementById('result') ;

    //2단계 데이터 가공...
    const fixed = fixedInput ? fixedInput.split(',').map( 
        n => parseInt(n.trim())) : [] ; 

    //3단계 로또 생성 루프시작..
    let html = "<h3> 생성된 번호 </h3>";

    for( let i=0 ; i < count ; i++ ){ 

        let numbers = new Set(fixed);  //중복되지않는 고정수가 들어간 주머니를 만든다. //중복제거

            while(numbers.size < 6){ //번호가 6개 될때까지..

                let num = Math.floor(Math.random() * 45) + 1 ; // (0~44.9999) +1
                
                numbers.add(num) // 뽑은 번호를 주머니에 넣음...


            }

            let sortedNums = Array.from(numbers).sort((a,b)=> a -b);  //정렬 작은수부터 큰수로

            html += `<p>${sortedNums.join(', ')}</p>`; //정렬된 번호들을 쉼표 넣어줌 
        
    }
    resultDiv.innerHTML = html;
}



