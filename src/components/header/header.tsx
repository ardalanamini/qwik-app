import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import MenuItem from './menu-item';

export default component$(() => {
  return (
    <header
      class="flex bg-white border-b-[10px] border-solid border-b-qwik-dark-purple"
    >
      <div>
        <a
          href="https://qwik.builder.io/"
          target="_blank"
          class="inline-block p-[10px] pb-[7px] pl-[20px]"
        >
          <QwikLogo />
        </a>
      </div>
      <ul
        class="m-0 p-0 pt-[3px] pr-[10px] list-none flex-1 text-right"
      >
        <MenuItem label="Docs" link="https://qwik.builder.io/docs/components/overview/" />
        <MenuItem label="Examples" link="https://qwik.builder.io/examples/introduction/hello-world/" />
        <MenuItem label="Tutorials" link="https://qwik.builder.io/tutorial/welcome/overview/" />
      </ul>
    </header>
  );
});
