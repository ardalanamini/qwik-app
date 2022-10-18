import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main
        class="max-w-[760px] my-0 mx-auto bg-white rounded-[5px] shadow-[0_0_130px_-50px_var(--qwik-light-purple)] overflow-hidden"
      >
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
