
/**
 ✨ 비동기 프로그래밍
 파일 입출력이나 네트워크 요청과 같은 작업이 완료될때까지 기다리는 동안 
 프로그램이 다른 작업을 수행할 수 있도록 함

 동기식 
 완료될때까지 실행을 차단 하고 지연 초래 readFileSync
 */

const fs = require('fs'); // fileSystem : 파일을 읽거나 사용하는 노드js 모듈을 불러옴
// const { data } = require('jquery');

 console.log("1.비동기 읽기")
 fs.readFile('myfile.txt', 'utf8',(err,data)=> { 
    /*
    myfile.txt를 백그라운드에서 읽거라
    utf-8 사람이 읽을 수 있게 기계어가 아닌 일반적인 텍스트 형태......인코딩
    (err, data)=>{...} 
    파일을 읽는 작업이 다 끝나면 => 그때 이 콜백함수(괄호안의 내용을)를 실행해줘..
    행동지침서...
    */
   if(err) throw err;  //파일을 읽다가 에러가 났다면(파일이 없으면) err에 내용 담아 에러를 던져라!
   
//    if (err) {
//         console.error("❌ 에러 발생!! 파일 못 찾았음:", err.message);
//         return;
//     }
   console.log("3.읽기가 끝남");
   console.log("📄 파일: \n", data);


 }) 

 console.log("2. 나 먼저 퇴근함~ (비동기 증거)");

