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
function solution(n) {
  let str = n.toString();
  let s = str.split('').reverse();
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(Number(s[i]));
  }
  
}

solution(12345);
