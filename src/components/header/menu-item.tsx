import { component$ } from '@builder.io/qwik';

export default component$<{link:string, label: string}>((props) => (
  <li
    class="inline-block m-0 p-0"
  >
    <a
      href={props.link}
      target="_blank"
      class="inline-block py-[15px] px-[10px] no-underline hover:underline"
    >
      {props.label}
    </a>
  </li>
));
