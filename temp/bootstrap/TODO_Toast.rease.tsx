import 'rease/jsx'
import { TypeReaseContext, TypeReaseProp } from 'rease'
// import { store, onDestroy } from 'rease'

// import { ButtonClose } from '../components/Button.rease'

// import { bindPropSafe } from '../utils'
// import { useListen } from '../utils/use'

import { VARIANTS } from '../constants'
export { VARIANTS, SIZES } from '../constants'

const TOAST = 'toast'

export function Toast(
  this: TypeReaseContext,
  {
    variant,

    ...attrs
  } : {
    variant?: TypeReaseProp<typeof VARIANTS[keyof typeof VARIANTS]>

    label?: TypeReaseProp<string>
    grow?: TypeReaseProp<boolean>

    small?: TypeReaseProp<boolean>

    [key: string]: any
  }
): void {
  <div
    role="alert" aria-live="assertive" aria-atomic="true"
    {...attrs}
    class={`${
      attrs.class!! ? attrs.class!! + ' ' : ''
    }${
      `${TOAST} fade show`
    }${
      variant!! ? ` bg-${variant!!}` : ''
    }`}
    r-use={this.use}
  >
    <r-slot/>
  </div>
}

export function ToastBody(
  this: TypeReaseContext,
  { ...attrs } : {
    class?: TypeReaseProp<string>

    [key: string]: any
  }
): void {
  <div
    {...attrs}
    class={`${
      attrs.class!! ? attrs.class!! + ' ' : ''
    }${
      `${TOAST}-body`
    }`}
    r-use={this.use}
  >
    <r-slot/>
  </div>
}

export function ToastHeader(
  this: TypeReaseContext,
  { ...attrs } : {
    class?: TypeReaseProp<string>

    [key: string]: any
  }
): void {
  <div
    {...attrs}
    class={`${
      attrs.class!! ? attrs.class!! + ' ' : ''
    }${
      `${TOAST}-header`
    }`}
    r-use={this.use}
  >
    <r-slot/>
  </div>
}

export const Cheatsheet = (): void => {
  <article class="my-3" id="toasts">
    <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
      <h3>Toasts</h3>
      <a class="d-flex align-items-center" href="/docs/5.1/components/toasts/">Documentation</a>
    </div>

    <div>
      <div class="bd-example bg-dark p-5 align-items-center">

        <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>

            <strong class="me-auto">Bootstrap</strong>
            <small class="text-muted">11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>

      </div>
    </div>
  </article>
}
