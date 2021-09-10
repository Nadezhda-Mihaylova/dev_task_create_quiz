//our-domain.com/
import { useRouter } from "next/router";
import { Fragment } from "react";


function HomePage() {
    const router = useRouter();

    function showQuizHandler(e) {
        e.preventDefault()
        router.push('/quiz');
    }

  return (
    <Fragment>
        <aside>
            <h1>Let's start the quiz!</h1>
            <button onClick={showQuizHandler}>Start</button>
        </aside>
    </Fragment>
  );
}

export default HomePage;
