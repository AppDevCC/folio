import{dc as T,dd as I,dk as B,de as d,dI as y,dh as t,dK as h,dF as C,di as n}from"./index-4A4dAPfk.js";import{h as O}from"./CopyToClipboard-i_OQSBJr-BLCpwMsS.js";import{n as q}from"./OpenLink-CUpJ1mOr-B5STU1er.js";import{x as E}from"./QrCode-Ddiv3lt7-Ci3QXuIw.js";import{n as M}from"./ScreenLayout-CyLnlt7g-BNgsBVI-.js";import{l as x}from"./farcaster-DPlSjvF5-GUuvlc_S.js";import"./dijkstra-COg3n3zL.js";import"./ModalFooter-DDm8WjC0-BaYGl9rz.js";import"./Screen-BWBDKsup-tm6aM2-1.js";import"./index-CWARkn2w-D9GgMD-s.js";let k="#8a63d2";const _=({appName:u,loading:m,success:i,errorMessage:e,connectUri:r,onBack:s,onClose:c,onOpenFarcaster:o})=>t.jsx(M,h.isMobile||m?h.isIOS?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,icon:x,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},primaryCta:r&&o?{label:"Open Farcaster app",onClick:o}:void 0,onBack:s,onClose:c,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:x,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},onBack:s,onClose:c,watermark:!0,children:r&&h.isMobile&&t.jsx(A,{children:t.jsx(q,{text:"Take me to Farcaster",url:r,color:k})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,onBack:s,onClose:c,watermark:!0,children:t.jsxs(R,{children:[t.jsx(L,{children:r?t.jsx(E,{url:r,size:275,squareLogoElement:x}):t.jsx(V,{children:t.jsx(C,{})})}),t.jsxs(N,{children:[t.jsx(P,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),r&&t.jsx(O,{text:r,itemName:"link",color:k})]})]})});let A=n.div`
  margin-top: 24px;
`,R=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,L=n.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,N=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,P=n.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,V=n.div`
  position: relative;
  width: 82px;
  height: 82px;
`;const Y={component:()=>{let{lastScreen:u,navigateBack:m,data:i}=T(),e=I(),{requestFarcasterSignerStatus:r,closePrivyModal:s}=B(),[c,o]=d.useState(void 0),[S,v]=d.useState(!1),[j,w]=d.useState(!1),g=d.useRef([]),a=i==null?void 0:i.farcasterSigner;d.useEffect((()=>{let b=Date.now(),l=setInterval((async()=>{if(!(a!=null&&a.public_key))return clearInterval(l),void o({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});a.status==="approved"&&(clearInterval(l),v(!1),w(!0),g.current.push(setTimeout((()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0})),y)));let p=await r(a==null?void 0:a.public_key),F=Date.now()-b;p.status==="approved"?(clearInterval(l),v(!1),w(!0),g.current.push(setTimeout((()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0})),y))):F>3e5?(clearInterval(l),o({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):p.status==="revoked"&&(clearInterval(l),o({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))}),2e3);return()=>{clearInterval(l),g.current.forEach((p=>clearTimeout(p)))}}),[]);let f=(a==null?void 0:a.status)==="pending_approval"?a.signer_approval_url:void 0;return t.jsx(_,{appName:e.name,loading:S,success:j,errorMessage:c,connectUri:f,onBack:u?m:void 0,onClose:s,onOpenFarcaster:()=>{f&&(window.location.href=f)}})}};export{Y as FarcasterSignerStatusScreen,_ as FarcasterSignerStatusView,Y as default};
