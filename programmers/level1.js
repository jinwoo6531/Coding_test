//1번 짝수/홀수

//2번
//123 = 6
// function solution(n) {
//   return;
//   String(n)
//     .split('')
//     .reduce((acc, curr) => acc + +curr, 0);
// }
// solution(123);

//3번 약수구하여 더하기
// function solution(n) {
//   let answer = 0;
//   for (let i = 0; i <= n; i++) {
//     if (n % i === 0) {
//       answer += i;
//     }
//   }

//   console.log(answer);
// }

//4번 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
//[1,2,3,4] = 2.5
//평균은 1+2+3+4 / arr.length;
// function solution(arr) {
//     let a = arr.reduce((sum,curr) => sum + curr,0);

//     return a / arr.length;
// }

//5번 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
//12345 = [5,4,3,2,1]
// function solution(n) {
//   let str = n.toString();
//   let s = str.split('').reverse();
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     arr.push(Number(s[i]));
//   }
// }

//6번 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// s = 'pPoooyY'
// function solution(s) {
//   return (
//     s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
//   );
// }

// solution('pPoooyY');

//7번 하샤드
//12 = true
// function solution(x) {
//   let sum = 0;
//   let a = String(x).split('');
//   console.log(a);
//   [];
//   for (let i = 0; i < a.length; i++) {
//     sum += Number(a[i]);
//   }
//   return x / 3 === 0 ? true : false;
// }

//8번 정수 내림차순
//118372 -> 873211
// function solution(n) {
//   console.log(String(n).split('').sort().reverse().join(''));
// }
// solution(118372);

//9번 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다
// function solution(x, n) {
//     var answer = [];
//     for (let i = 1; i <= n; i++) {
//         answer.push(x*i)
//     }
//     return answer;
// }

//10번 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return
// function solution(n) {
//     for(let i = 2; i < n; i++) {
//         if(n % i === 1) return i;
//     }
// }
// solution(12);

//11번
function solution(seoul) {
  //seoul = ["Jane","Kim"];
  //seoul배열안에 있는 "Kim"위치 찾기
  let index = seoul.indexOf('Kim');

  let answer = `김서방은 ${seoul.indexof('Kim')}에 있다`;
  return answer;
}
solution(['Jane', 'Kim']);
