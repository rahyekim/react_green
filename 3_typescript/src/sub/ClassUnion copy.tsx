
//1.원본데이터 모든값이 필수 입력사항
interface UserProfile {
    id: string;
    name: string;
    email: string;
    bio: string;//자기소개
    theme: 'light'|'dark'; //화면모드
}

//2가상의 유저 데이터

let currentUser: Userprofile ={
    id: "user_!23",
    username: "현진",
    email: "skz@idol.com",
    bio: "스키즈 메덴",
    theme: "light"
}
// 3. 🌟 Partial을 사용한 수정 함수
//Partial<UserProfile> 덕분에 
// id, username 등을 다 안 보내고 "바꾸고 싶은 것만" 보낼 수 있어!
const updateUserProfile = (changes: Partial<UserProfile>) =>{
    currentUser ={
        ...currentUser,
        ...changes //기존 유저 정보에 바뀐 부분만 덮어쓰기!!
    };
    console.log("수정완료! 현재프로필:", currentUser); 
}

//4.실제 함수호출하기
//다크모드로 바꾸고 자기소개만 수정하고 싶을떄 이것만 넘겨줘도 에러안남

updateUserProfile({
    theme: "dark",
    bio: "🚀 스키즈 "
})