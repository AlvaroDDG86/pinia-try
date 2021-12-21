export default function (): any {
  return new Promise((response, reject) => {
    setTimeout(() => {
      response(Math.round(100 * Math.random()));
    }, 2000);
  });
}
