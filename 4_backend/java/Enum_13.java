import java.util.Arrays;

/*자바 내장형 array: 정해진것에 
최적 고정형이 아닌걸 java util array로  */

public enum OrderStatus {

}

public class Enum_13 {

    public static void main(String[] args) {

        String enumeration = "열거형" +
                "서로 관련된 상수들의 집합을 정의할때 사용하는 자료형" +
                "C나 C++의 enum 단순히 정수값에 이름을 붙인거라면" +
                "자바의 enum은 완전한 기능을 갖춘 클래스" +
                "자바 enum의 특징: " +
                "타입 안정성 보장: 컴파일 타임에 타입을 체크 예상치 못한값이 들어오는걸 원천 차단" +
                "데이터와 로직의 결합: 상수 자체가 객체이기 때문에 내부에 필드(변수)와 메서드를 가짐" +
                "리팩토링과 유지보수에 용이: 상태코드가 추가되거나 변경될때 enum 클래스 하나만 수정하면" +
                "관련된 로직이 모두 안전하게 반영"

        ;
    }
}