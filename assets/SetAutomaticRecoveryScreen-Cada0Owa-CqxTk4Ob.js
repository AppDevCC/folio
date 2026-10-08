import{dM as U,dk as $,dc as M,de as u,dh as e,eC as v,eT as j,dI as P,di as W}from"./index-z2kq2BAv.js";import{F as A}from"./ExclamationTriangleIcon-CiHvM4sf.js";import{F as V}from"./LockClosedIcon-4Y5lvXgo.js";import{L as S,u as b,h as C}from"./ModalFooter-DDm8WjC0-DYcfd__P.js";import{r as B}from"./Subtitle-CV-2yKE4-CBNcxUoS.js";import{e as T}from"./Title-BnzYV3Is-BxmmgOm3.js";const H=W.div`
  && {
    border-width: 4px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  aspect-ratio: 1;
  border-style: solid;
  border-color: ${i=>i.$color??"var(--privy-color-accent)"};
  border-radius: 50%;
`,z={component:()=>{var g;let{user:i}=U(),{client:k,walletProxy:m,refreshSessionAndUser:E,closePrivyModal:l}=$(),s=M(),{entropyId:f,entropyIdVerifier:F}=((g=s.data)==null?void 0:g.recoverWallet)??{},[n,h]=u.useState(!1),[c,I]=u.useState(null),[d,p]=u.useState(null);function y(){var r,o,t,a;if(!n){if(d)return(o=(r=s.data)==null?void 0:r.setWalletPassword)==null||o.onFailure(d),void l();if(!c)return(a=(t=s.data)==null?void 0:t.setWalletPassword)==null||a.onFailure(Error("User exited set recovery flow")),void l()}}s.onUserCloseViaDialogOrKeybindRef.current=y;let R=!(!n&&!c);return e.jsxs(e.Fragment,d?{children:[e.jsx(S,{onClose:y},"header"),e.jsx(H,{$color:"var(--privy-color-error)",style:{alignSelf:"center"},children:e.jsx(A,{height:38,width:38,stroke:"var(--privy-color-error)"})}),e.jsx(T,{style:{marginTop:"0.5rem"},children:"Something went wrong"}),e.jsx(v,{style:{minHeight:"2rem"}}),e.jsx(b,{onClick:()=>p(null),children:"Try again"}),e.jsx(C,{})]}:{children:[e.jsx(S,{onClose:y},"header"),e.jsx(V,{style:{width:"3rem",height:"3rem",alignSelf:"center"}}),e.jsx(T,{style:{marginTop:"0.5rem"},children:"Automatically secure your account"}),e.jsx(B,{style:{marginTop:"1rem"},children:"When you log into a new device, you’ll only need to authenticate to access your account. Never get logged out if you forget your password."}),e.jsx(v,{style:{minHeight:"2rem"}}),e.jsx(b,{loading:n,disabled:R,onClick:()=>(async function(){h(!0);try{let r=await k.getAccessToken(),o=j(i,f);if(!r||!m||!o)return;if(!(await m.setRecovery({accessToken:r,entropyId:f,entropyIdVerifier:F,existingRecoveryMethod:o.recoveryMethod,recoveryMethod:"privy"})).entropyId)throw Error("Unable to set recovery on wallet");let t=await E();if(!t)throw Error("Unable to set recovery on wallet");let a=j(t,o.address);if(!a)throw Error("Unabled to set recovery on wallet");I(!!t),setTimeout((()=>{var w,x;(x=(w=s.data)==null?void 0:w.setWalletPassword)==null||x.onSuccess(a),l()}),P)}catch(r){p(r)}finally{h(!1)}})(),children:c?"Success":"Confirm"}),e.jsx(C,{})]})}};export{z as SetAutomaticRecoveryScreen,z as default};
