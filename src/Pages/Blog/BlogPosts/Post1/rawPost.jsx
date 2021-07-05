import React from "react";

const source = (
   <a
      href="https://en.wikipedia.org/wiki/Basel_problem"
      target="_blank"
      rel="noreferrer"
   >
      *
   </a>
);

const f = <img src="https://latex.codecogs.com/gif.latex?f" title="f" />;

const a = <img src="https://latex.codecogs.com/gif.latex?a" title="a" />;

const taylorFormula = (
   <img
      src="https://latex.codecogs.com/gif.latex?f(a)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^{n}"
      title="f(a)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^{n}"
   />
);

const S = <img src="https://latex.codecogs.com/gif.latex?S" title="S" />;

const baselProblem = (
   <img
      src="https://latex.codecogs.com/gif.latex?\sum_{n=1}^{\infty}\frac{1}{n^{2}}"
      title="\sum_{n=1}^{\infty}\frac{1}{n^{2}}"
   />
);

const baselTalor = (
   <img
      src="https://latex.codecogs.com/gif.latex?\frac{1}{n^{2}}=f^{(n-1)}(a)\frac{(x-a)^{n-1}}{(n-1)!}\;&space;for\;&space;n&space;\in&space;\mathbb{N}"
      title="\frac{1}{n^{2}}=f^{(n-1)}(a)\frac{(x-a)^{n-1}}{(n-1)!}\; for\; n \in \mathbb{N}"
   />
);

const x = <img src="https://latex.codecogs.com/gif.latex?x" title="x" />;

const x2 = <img src="https://latex.codecogs.com/gif.latex?x=2" title="x=2" />;

const a1 = <img src="https://latex.codecogs.com/gif.latex?a=1" title="a=1" />;

const baselTaylorSub = (
   <img
      src="https://latex.codecogs.com/gif.latex?\frac{1}{n^{2}}=f^{(n-1)}(1)\frac{1}{(n-1)!}\;&space;for\;&space;n\in&space;\mathbb{N}"
      title="\frac{1}{n^{2}}=f^{(n-1)}(1)\frac{1}{(n-1)!}\; for\; n\in \mathbb{N}"
   />
);

const fPrime = (
   <img src="https://latex.codecogs.com/gif.latex?f^{n}(1)" title="f^{n}(1)" />
);

const fPrimeEquals = (
   <img
      src="https://latex.codecogs.com/gif.latex?f^{n}(1)=\frac{n!}{(n&plus;1)^{2}}\;&space;for\;&space;n\in&space;\mathbb{N}\cup\{0\}"
      title="f^{n}(1)=\frac{n!}{(n+1)^{2}}\; for\; n\in \mathbb{N}\cup\{0\}"
   />
);

const x1 = <img src="https://latex.codecogs.com/gif.latex?x=1" title="x=1" />;

const taylorOfF = (
   <img
      src="https://latex.codecogs.com/gif.latex?f(x)=\sum_{n=0}^{\infty}\frac{f^{n}(1)}{n!}(x-1)^{n}"
      title="f(x)=\sum_{n=0}^{\infty}\frac{f^{n}(1)}{n!}(x-1)^{n}"
   />
);

const fPrimeEqualsInline = (
   <img
      src="https://latex.codecogs.com/gif.latex?\inline&space;f^{n}(1)=\frac{n!}{(n&plus;1)^{2}}"
      title="f^{n}(1)=\frac{n!}{(n+1)^{2}}"
   />
);

const substitution = (
   <img
      src="https://latex.codecogs.com/gif.latex?f(x)=\sum_{n=0}^{\infty}\frac{\frac{n!}{(n&plus;1)^{2}}}{n!}(x-1)^{n}=\sum_{n=0}^{\infty}\frac{(x-1)^{n}}{(n&plus;1)^{2}}"
      title="f(x)=\sum_{n=0}^{\infty}\frac{\frac{n!}{(n+1)^{2}}}{n!}(x-1)^{n}=\sum_{n=0}^{\infty}\frac{(x-1)^{n}}{(n+1)^{2}}"
   />
);

const formula = (
   <img
      src="https://latex.codecogs.com/gif.latex?\inline&space;\sum_{n=0}^{\infty}=\frac{1}{1-t}"
      title="\sum_{n=0}^{\infty}=\frac{1}{1-t}"
   />
);

const becomes = (
   <img
      src="https://latex.codecogs.com/gif.latex?\inline&space;\sum_{n=0}^{\infty}\frac{(x-1)^{n}}{(n&plus;1)^{2}}"
      title="\sum_{n=0}^{\infty}\frac{(x-1)^{n}}{(n+1)^{2}}"
   />
);

const step1 = (
   <img
      src="https://latex.codecogs.com/gif.latex?\sum_{n=0}^{\infty}t^{n}=\frac{1}{1-t}\Rightarrow"
      title="\sum_{n=0}^{\infty}t^{n}=\frac{1}{1-t}\Rightarrow"
   />
);

const step2 = (
   <img
      src="https://latex.codecogs.com/gif.latex?\int_{0}^{x}\sum_{n=0}^{\infty}t^{n}dt=\int_{0}^{x}\frac{1}{1-t}dt\Rightarrow"
      title="\int_{0}^{x}\sum_{n=0}^{\infty}t^{n}dt=\int_{0}^{x}\frac{1}{1-t}dt\Rightarrow"
   />
);

const step3 = (
   <img
      src="https://latex.codecogs.com/gif.latex?\sum_{n=0}^{\infty}\frac{x^{n&plus;1}}{n&plus;1}=ln(1-x)\Rightarrow"
      title="\sum_{n=0}^{\infty}\frac{x^{n+1}}{n+1}=ln(1-x)\Rightarrow"
   />
);

const step4 = (
   <img
      src="https://latex.codecogs.com/gif.latex?\sum_{n=0}^{\infty}\frac{x^{n}}{n&plus;1}=\frac{ln(1-x)}{x}\Rightarrow"
      title="\sum_{n=0}^{\infty}\frac{x^{n}}{n+1}=\frac{ln(1-x)}{x}\Rightarrow"
   />
);

const step5 = (
   <img
      src="https://latex.codecogs.com/gif.latex?\int_{0}^{x}\sum_{n=0}^{\infty}\frac{t^{n}}{n&plus;1}dt=\int_{0}^{x}\frac{ln(1-t)}{t}dt\Rightarrow"
      title="\int_{0}^{x}\sum_{n=0}^{\infty}\frac{t^{n}}{n+1}dt=\int_{0}^{x}\frac{ln(1-t)}{t}dt\Rightarrow"
   />
);

const step6 = (
   <img
      src="https://latex.codecogs.com/gif.latex?\sum_{n=0}^{\infty}\frac{x^{n&plus;1}}{(n&plus;1)^{2}}=\int_{0}^{x}\frac{ln(1-t)}{t}dt\Rightarrow"
      title="\sum_{n=0}^{\infty}\frac{x^{n+1}}{(n+1)^{2}}=\int_{0}^{x}\frac{ln(1-t)}{t}dt\Rightarrow"
   />
);

const step7 = (
   <img
      src="https://latex.codecogs.com/gif.latex?\sum_{n=0}^{\infty}\frac{(x-1)^{n&plus;1}}{(n&plus;1)^{2}}=\int_{0}^{x-1}\frac{ln(1-t)}{t}dt\Rightarrow"
      title="\sum_{n=0}^{\infty}\frac{(x-1)^{n+1}}{(n+1)^{2}}=\int_{0}^{x-1}\frac{ln(1-t)}{t}dt\Rightarrow"
   />
);

const step8 = (
   <img
      src="https://latex.codecogs.com/gif.latex?\sum_{n=0}^{\infty}\frac{(x-1)^{n}}{(n&plus;1)^{2}}=\frac{1}{x-1}\int_{0}^{x-1}\frac{ln(1-t)}{t}dt\Rightarrow"
      title="\sum_{n=0}^{\infty}\frac{(x-1)^{n}}{(n+1)^{2}}=\frac{1}{x-1}\int_{0}^{x-1}\frac{ln(1-t)}{t}dt\Rightarrow"
   />
);

const solvedFunction = (
   <img
      src="https://latex.codecogs.com/gif.latex?f(x)=\frac{1}{x-1}\int_{0}^{x-1}\frac{ln(1-t)}{t}dt"
      title="f(x)=\frac{1}{x-1}\int_{0}^{x-1}\frac{ln(1-t)}{t}dt"
   />
);

const solvedFunctionInline = (
   <img
      src="https://latex.codecogs.com/gif.latex?\inline&space;f(x)=\frac{1}{x-1}\int_{0}^{x-1}\frac{ln(1-t)}{t}dt"
      title="f(x)=\frac{1}{x-1}\int_{0}^{x-1}\frac{ln(1-t)}{t}dt"
   />
);

const baselSolution = (
   <img
      src="https://latex.codecogs.com/gif.latex?\frac{\pi^{2}}{6}"
      title="\frac{\pi^{2}}{6}"
   />
);

const mySolution = (
   <img
      src="https://latex.codecogs.com/gif.latex?-\frac{\pi^{2}}{6}"
      title="-\frac{\pi^{2}}{6}"
   />
);

const joke = (
   <img src="https://latex.codecogs.com/gif.latex?1=-1" title="1=-1" />
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
            point {a} is {S}? If this is possible, we might be able to use the
            resulting function to evaluate {S}.
         </p>
         <br />
         <p>
            When investigating this, I decided to use this idea to attempt to
            solve the famous Basel problem in a new, bizarre way. First proposed
            in 1650, and solved by Leonhard Eulor in 1734{source}, the Basel
            problem asks to evaluate the following:
         </p>
         <br />
         <p>{baselProblem}</p>
         <br />
         <p>
            Lets call this infinite sum {S}. So if we treat {S} as a Taylor
            expansion of some unknown function {f}, then we can write each term
            in {S} as follows:
         </p>
         <br />
         <p>{baselTalor}</p>
         <br />
         <p>
            Our choice for {x} and {a} is arbitrary, so lets choose values that
            simplify the problem. If we let {x2} and {a1}, we get the following:
         </p>
         <br />
         <p>{baselTaylorSub}</p>
         <br />
         <p>Rearranging the terms to isolate {fPrime} gives us:</p>
         <br />
         <p>{fPrimeEquals}</p>
         <br />
         <p>So given the requirement above, what is {f}?</p>
         <br />
         <p>
            If you take the Taylor expansion of {f} centered around {x1}, you
            get the following:
         </p>
         <br />
         <p>{taylorOfF}</p>
         <br />
         <p>Substituting for {fPrimeEqualsInline} yields:</p>
         <br />
         <p>{substitution}</p>
         <br />
         <p>
            Now use the formula, {formula}. We want to manipulate the left side
            of this equation until it becomes {becomes}. Then whatever is on the
            right side will be {f}:
         </p>
         <br />
         <p>{step1}</p>
         <br />
         <p>{step2}</p>
         <br />
         <p>{step3}</p>
         <br />
         <p>{step4}</p>
         <br />
         <p>{step5}</p>
         <br />
         <p>{step6}</p>
         <br />
         <p>{step7}</p>
         <br />
         <p>{step8}</p>
         <br />
         <p>So we get that</p>
         <br />
         <p>{solvedFunction}</p>
         <br />
         <p>
            is the value for {f} we were looking for, thus showing that it is
            possible to derive a function from its Taylor expansion for{" "}
            <i>some</i> series {S}.
         </p>
         <br />
         <p>Except for one minor detail...</p>
         <br />
         <p>
            Assuming I did everything right, if we plug {x2} into{" "}
            {solvedFunctionInline}, we should expect to get the answer to the
            Basel problem, which was confirmed to be {baselSolution} by Leonhard
            Eulor in 1734{source}. However, doing so yields {mySolution} for
            whatever reason, meaning I made a mistake in my math somewhere (or
            that {joke} haha). Maybe someday I will revisit this and find where
            I went wrong.
         </p>
      </>
   );
};

export default rawPost;
