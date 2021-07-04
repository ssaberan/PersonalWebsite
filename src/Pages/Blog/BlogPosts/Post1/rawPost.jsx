import React from "react";

const f = (
   <a
      href="https://www.codecogs.com/eqnedit.php?latex=f"
      target="_blank"
      rel="noreferrer"
   >
      <img src="https://latex.codecogs.com/gif.latex?f" title="f" />
   </a>
);

const a = (
   <a
      href="https://www.codecogs.com/eqnedit.php?latex=a"
      target="_blank"
      rel="noreferrer"
   >
      <img src="https://latex.codecogs.com/gif.latex?a" title="a" />
   </a>
);

const taylorFormula = (
   <a
      href="https://www.codecogs.com/eqnedit.php?latex=f(a)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^{n}"
      target="_blank"
      rel="noreferrer"
   >
      <img
         src="https://latex.codecogs.com/gif.latex?f(a)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^{n}"
         title="f(a)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^{n}"
      />
   </a>
);

const S = (
   <a
      href="https://www.codecogs.com/eqnedit.php?latex=S"
      target="_blank"
      rel="noreferrer"
   >
      <img src="https://latex.codecogs.com/gif.latex?S" title="S" />
   </a>
);

const baselProblem = (
   <a
      href="https://www.codecogs.com/eqnedit.php?latex=\sum_{n=1}^{\infty}\frac{1}{n^{2}}"
      target="_blank"
      rel="noreferrer"
   >
      <img
         src="https://latex.codecogs.com/gif.latex?\sum_{n=1}^{\infty}\frac{1}{n^{2}}"
         title="\sum_{n=1}^{\infty}\frac{1}{n^{2}}"
      />
   </a>
);

const rawPost = () => {
   return (
      <>
         <h1>A bizarre way of evaluating infinite series&apos;</h1>
         <br />
         <p>
            Given a function {f} that is infinitely differentiable around a
            point {a}, we can derive the Taylor expansion of {f} around {a} as
            follows:
         </p>
         <br />
         <p>{taylorFormula}</p>
         <br />
         <p>
            However, is the reverse also possible to derive? In other words,
            given an infinite series {S}, can we find a function {f} such that
            the Taylor expansion of {f} around some infinitely differentiable
            point {a} is {S}? If this is possible, we can use the resulting
            function to evaluate {S}.
         </p>
         <br />
         <p>
            When investigating this, I decided to use this idea to attempt to
            solve the famous Basel problem in a new, bizarre way. First proposed
            in 1650, and solved by Leonhard Eulor in 1734
            <a
               href="https://en.wikipedia.org/wiki/Basel_problem"
               target="_blank"
               rel="noreferrer"
            >
               *
            </a>
            , the Basel problem asks to evaluate the following:
         </p>
         <br />
         <p>{baselProblem}</p>
      </>
   );
};

export default rawPost;
