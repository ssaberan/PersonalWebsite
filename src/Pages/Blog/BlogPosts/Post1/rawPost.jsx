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

const f = (
    <img src="https://latex.codecogs.com/gif.latex?\inline&space;f" title="f" />
);

const a = (
    <img src="https://latex.codecogs.com/gif.latex?\inline&space;a" title="a" />
);

const a0 = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;a=0"
        title="a=0"
    />
);

const taylorFormula = (
    <img
        src="https://latex.codecogs.com/gif.latex?f(a)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^{n}"
        title="f(a)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^{n}"
    />
);

const S = (
    <img src="https://latex.codecogs.com/gif.latex?\inline&space;S" title="S" />
);

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

const x = (
    <img src="https://latex.codecogs.com/gif.latex?\inline&space;x" title="x" />
);

const baselTaylorSub = (
    <img
        src="https://latex.codecogs.com/svg.image?\frac{1}{n^{2}}=f^{(n-1)}(0)\frac{1}{(n-1)!}\;&space;for\;&space;n\in&space;\mathbb{N}"
        title="https://latex.codecogs.com/svg.image?\frac{1}{n^{2}}=f^{(n-1)}(0)\frac{1}{(n-1)!}\; for\; n\in \mathbb{N}"
    />
);

const fPrime = (
    <img
        src="https://latex.codecogs.com/svg.image?f^{(n)}(0)"
        title="https://latex.codecogs.com/svg.image?f^{(n)}(0)"
    />
);

const fPrimeEquals = (
    <img
        src="https://latex.codecogs.com/svg.image?f^{(n)}(0)=\frac{n!}{(n&plus;1)^{2}}\;&space;for\;&space;n\in&space;\mathbb{N}\cup\{0\}"
        title="https://latex.codecogs.com/svg.image?f^{(n)}(0)=\frac{n!}{(n+1)^{2}}\; for\; n\in \mathbb{N}\cup\{0\}"
    />
);

const x1 = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;x=1"
        title="x=1"
    />
);

const x0 = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;x=0"
        title="x=0"
    />
);

const taylorOfF = (
    <img
        src="https://latex.codecogs.com/svg.image?f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^{n}"
        title="https://latex.codecogs.com/svg.image?f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^{n}"
    />
);

const fPrimeEqualsInline = (
    <img
        src="https://latex.codecogs.com/svg.image?\inline&space;f^{(n)}(0)=\frac{n!}{(n&plus;1)^{2}}"
        title="https://latex.codecogs.com/svg.image?\inline f^{(n)}(0)=\frac{n!}{(n+1)^{2}}"
    />
);

const substitution = (
    <img
        src="https://latex.codecogs.com/gif.latex?f(x)=\sum_{n=0}^{\infty}\frac{\frac{n!}{(n&plus;1)^{2}}}{n!}x^{n}=\sum_{n=0}^{\infty}\frac{x^{n}}{(n&plus;1)^{2}}"
        title="f(x)=\sum_{n=0}^{\infty}\frac{\frac{n!}{(n+1)^{2}}}{n!}x^{n}=\sum_{n=0}^{\infty}\frac{(x-1)^{n}}{(n+1)^{2}}"
    />
);

const formula = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;\sum_{n=0}^{\infty}t^{n}=\frac{1}{1-t}"
        title="\sum_{n=0}^{\infty}t^{n}=\frac{1}{1-t}"
    />
);

const becomes = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;\sum_{n=0}^{\infty}\frac{x^{n}}{(n&plus;1)^{2}}"
        title="\sum_{n=0}^{\infty}\frac{x^{n}}{(n+1)^{2}}"
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

const step8 = (
    <img
        src="https://latex.codecogs.com/gif.latex?\sum_{n=0}^{\infty}\frac{x^{n}}{(n&plus;1)^{2}}=\frac{1}{x}\int_{0}^{x}\frac{ln(1-t)}{t}dt\Rightarrow"
        title="\sum_{n=0}^{\infty}\frac{x^{n}}{(n+1)^{2}}=\frac{1}{x}\int_{0}^{x-1}\frac{ln(1-t)}{t}dt\Rightarrow"
    />
);

const solvedFunction = (
    <img
        src="https://latex.codecogs.com/gif.latex?f(x)=\frac{1}{x}\int_{0}^{x}\frac{ln(1-t)}{t}dt"
        title="f(x)=\frac{1}{x}\int_{0}^{x}\frac{ln(1-t)}{t}dt"
    />
);

const solvedFunctionInline = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;f(x)=\frac{1}{x}\int_{0}^{x}\frac{ln(1-t)}{t}dt"
        title="f(x)=\frac{1}{x}\int_{0}^{x-1}\frac{ln(1-t)}{t}dt"
    />
);

const baselSolution = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;\frac{\pi^{2}}{6}"
        title="\frac{\pi^{2}}{6}"
    />
);

const mySolution = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;-\frac{\pi^{2}}{6}"
        title="-\frac{\pi^{2}}{6}"
    />
);

const joke = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;1=-1"
        title="1=-1"
    />
);

const step3NoArrow = (
    <img
        src="https://latex.codecogs.com/gif.latex?\sum_{n=0}^{\infty}\frac{x^{n&plus;1}}{n&plus;1}=ln(1-x)"
        title="\sum_{n=0}^{\infty}\frac{x^{n+1}}{n+1}=ln(1-x)"
    />
);

const oneOver = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;\frac{1}{1-t}"
        title="\frac{1}{1-t}"
    />
);

const zero = (
    <img src="https://latex.codecogs.com/gif.latex?\inline&space;0" title="0" />
);

const t = (
    <img src="https://latex.codecogs.com/gif.latex?\inline&space;t" title="t" />
);

const negNatLog = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;-ln(1-t)"
        title="-ln(1-t)"
    />
);

const natLog = (
    <img
        src="https://latex.codecogs.com/gif.latex?\inline&space;ln(1-t)"
        title="ln(1-t)"
    />
);

const rawPost = () => {
    return (
        <>
            <p>
                Given a function {f} that is infinitely differentiable around a
                point {a}, we can derive the Taylor expansion of {f} around {a}{" "}
                as follows:
            </p>
            <br />
            <p>{taylorFormula}</p>
            <br />
            <p>
                However, is the reverse also possible to derive? In other words,
                given an infinite series {S}, can we find a function {f} such
                that the Taylor expansion of {f} around some infinitely
                differentiable point {a} is {S}? If this is possible, we might
                be able to use the resulting function to evaluate {S}.
            </p>
            <br />
            <p>
                When investigating this, I decided to use this idea to attempt
                to solve the famous Basel problem in a new, bizarre way. First
                proposed in 1650, and solved by Leonhard Eulor in 1734{source},
                the Basel problem asks to evaluate the following:
            </p>
            <br />
            <p>{baselProblem}</p>
            <br />
            <p>
                Lets call this infinite sum {S}. So if we treat {S} as a Taylor
                expansion of some unknown function {f}, then we can write each
                term in {S} as follows:
            </p>
            <br />
            <p>{baselTalor}</p>
            <br />
            <p>
                Our choice for {x} and {a} is arbitrary, so lets choose values
                that simplify the problem. If we let {x1} and {a0}, we get the
                following:
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
                If you take the Taylor expansion of {f} centered around {x0},
                you get the following:
            </p>
            <br />
            <p>{taylorOfF}</p>
            <br />
            <p>Substituting for {fPrimeEqualsInline} yields:</p>
            <br />
            <p>{substitution}</p>
            <br />
            <p>
                Now use the formula, {formula}. We want to manipulate the left
                side of this equation until it becomes {becomes}. Then whatever
                is on the right side will be {f}:
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
            <p>{step8}</p>
            <br />
            <p>So we get that</p>
            <br />
            <p>{solvedFunction}</p>
            <br />
            <p>
                is the value for {f} when {x1} we were looking for, thus showing
                that it is possible to derive a function from its Taylor
                expansion for <i>some</i> series {S} around <i>some</i>{" "}
                infinitely differentiable point (in this case {a0}).
            </p>
            <br />
            <p>Except for one not-so-minor detail...</p>
            <br />
            <p>
                Assuming I did everything right, if we plug {x1} into{" "}
                {solvedFunctionInline}, we should expect to get the answer to
                the Basel problem, which was confirmed to be {baselSolution} by
                Leonhard Eulor in 1734{source}. However, doing so yields{" "}
                {mySolution} for whatever reason, meaning I made a mistake in my
                math somewhere (or that {joke} haha). Maybe someday I will
                revisit this and find where I went wrong.
            </p>
            <br />
            <hr />
            <br />
            <p>
                <strong>Update on July 18th, 2021:</strong> After reading this
                blog post, Khristrian Decastro has pointed out that my mistake
                was in the step where I say:
            </p>
            <br />
            <p>{step2}</p>
            <br />
            <p>{step3NoArrow}</p>
            <br />
            <p>
                The integral of {oneOver} from {zero} to {x} with respect to {t}{" "}
                is actually equal to {negNatLog}, <i>not</i> {natLog}. This is
                where the erronious negative sign came from in my solution to
                the Basel problem.
            </p>
        </>
    );
};

export default rawPost;
