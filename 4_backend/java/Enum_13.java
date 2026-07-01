import java.util.Arrays;

/*자바 내장형 array: 정해진것에 최적 고정형 ex) int[] arr = new int[5]; 같은 기본 배열
java util array로 1)크기가 변하는 동적 배열을 쓰고 싶을 때 
B) 고정형 배열을 편하게 요리하고 싶을 때 */

enum OrderStatus { // 자바에서 public은 한 번만 나와야함, enum사용일떄는 파일명과 일치해야함.

    // 1.상수정의
    PAYMENT_WAITING("결제대기", true),
    PREPARING("상품준비중", true),
    SHIPPED("배송중", false),
    DELIVERED("배송완료", false),
    CANCELED("주문취소", false); // 👈 세미콜론 필수

    // 2.필드정의 : final을 붙여 안전하게 보호
    private final String description; // 화면에 노출될 설명
    private final boolean cancellable; // 취소가능여부

    // 3.생성자(💡enum에서의 생성자는 private) : new orderstatus 못찍어내게
    OrderStatus(String description, boolean cancellable) {
        this.description = description;
        this.cancellable = cancellable;
    }

    // 4.getter메서드
    public String getDescription() {
        return description;
    }

    public boolean getCancellable() {
        return cancellable;
    }

    // 5.실무활용로직
    public static OrderStatus from(String name) {
        /*
         * 정적팩토리 메서드(static) 객체를 생성하거나 반환할때 사용하는 패턴
         * 하나의 매개변수를 받아서 해당 타입의 인스턴스를 반환할때(실사용 객체)
         * 실무에서는 관례적으로 from이나 of라는 메서드 이름을 사용
         */

        return Arrays.stream(OrderStatus.values()) //배열로...
            // 이배열을 자바스크립트로 변환-> for반복문을사용하지않고 데이터를 함수형으로 깔금하게 처리하기
            // 위한 ??
            /*
                * orderstatus.values() 모든상수를 배열로 전환=>
                * Stream=> filter(),map(),findFirst() 등 메서드 기능활용할수있음
                */
            .filter(status -> status.name().equalsIgnoreCase(name)) //대소문자 무시하고 비교

            .findFirst()// 필터링조건에 맞는 첫번째 요소 찾기
            // 찾은값이 없으면? 메세지 남김
            .orElseThrow(() -> new IllegalArgumentException("잘못된주문상태입니다: " + name));
    }

}

public class Enum_13 { // enum을 끌어다 사용하는 클래스는

    public void cancelOrder(OrderStatus currentStatus) {
        if (currentStatus.getCancellable()) {
            System.out.println("주문이정상취소되었습니다");
        } else {
            System.out.println("취소불가 현재상태 [" + currentStatus.getDescription() + "] 입니다");
        }
    }

    public static void main(String[] args) {

        Enum_13 service = new Enum_13();

        // 상품중비중일때 취소시도
        OrderStatus status1 = OrderStatus.PREPARING;
        service.cancelOrder(status1);

        // 상황2 배송중일때 취소 시도
        OrderStatus status2 = OrderStatus.SHIPPED;
        service.cancelOrder(status2);

        //상황3 🟢.from()
        // 문자열 같은 외부 데이터를 안전하게 enum으로 변환하는 단일 통로(API)
        OrderStatus apiStatus = OrderStatus.from("DELIVERED");
        System.out.println("API상태 변환결과: " + apiStatus.getDescription());

        String enumeration = "열거형" +
            "서로 관련된 상수들의 집합을 정의할때 사용하는 자료형" +
            "C나 C++의 enum 단순히 정수값에 이름을 붙인거라면" +
            "자바의 enum은 완전한 기능을 갖춘 클래스" +
            "자바 enum의 특징: " +
            "타입 안정성 보장: 컴파일 타임에 타입을 체크 예상치 못한값이 들어오는걸 원천 차단" +
            "데이터와 로직의 결합: 상수 자체가 객체이기 때문에 내부에 필드(변수)와 메서드를 가짐" +
            "리팩토링과 유지보수에 용이: 상태코드가 추가되거나 변경될때 enum 클래스 하나만 수정하면" +
            "관련된 로직이 모두 안전하게 반영"

            /*

🌱 DB 매핑 핵심 구조 (실무 핵심)           DB (S)
code        → DB 값                OrderStatus.fromCode("S")
name        → enum 이름             OrderStatus.SHIPPED
description → 화면 표시              UI: "배송중"

public enum OrderStatus {

    PAYMENT_WAITING("P", "결제대기"),
    PREPARING("PR", "상품준비중"),
    SHIPPED("S", "배송중"),
    DELIVERED("D", "배송완료"),
    CANCELED("C", "주문취소");

    private final String code;
    private final String description;

    OrderStatus(String code, String description) {
        this.code = code;
        this.description = description;
    }
}

public static OrderStatus fromCode(String code) {
    return Arrays.stream(values())
            .filter(v -> v.code.equals(code))
            .findFirst()
            .orElseThrow(() -> new IllegalArgumentException("잘못된 코드"));
}


code   name        description
--------------------------------
P      PAYMENT     결제대기
PR     PREPARE     상품준비중
S      SHIPPED     배송중
D      DELIVERED   배송완료
C      CANCELED    주문취소
     

🌟캡슐화(Encapsulation)
자바는 “데이터를 마음대로 만지는 것”을 막고
“통제된 방식으로만 접근하게 만들기 위해” private + getter 구조를 씀 

외부
  ↓ (직접 접근 금지)
private 변수
  ↓ (getter/setter)
통제된 접근 : 안전하게 통제된 방식으로 접근하게



비교               의미                     비교대상 
------------------------------------------------------
==            주소(같은 객체?)              메모리위치
equals()       값 (내용 비교)              실제 데이터 


문자열 비교를 ==로 하면 위험 (false 나올 수 있음)
🔥 문자열 비교(String)는 .equals() 써야함

enum은 예외 JVM에서 객체가 하나만 존재(싱글톤) : == 써도 안전
*/
        ;
    }
}