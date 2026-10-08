import{c2 as j,dh as n,du as $,di as l}from"./index-4A4dAPfk.js";import{l as g,i as a,o as d,c as h}from"./ethers-zTjbodk5-Dv2MgyGo.js";import{r as k}from"./getFormattedUsdFromLamports-De3U9GlO-C446pzMl.js";import{t as y}from"./transaction-BNTP-bFm-CrebgH-D.js";const O=({weiQuantities:e,tokenPrice:i,tokenSymbol:o})=>{let r=a(e),t=i?d(r,i):void 0,s=h(r,o);return n.jsx(c,{children:t||s})},P=({weiQuantities:e,tokenPrice:i,tokenSymbol:o})=>{let r=a(e),t=i?d(r,i):void 0,s=h(r,o);return n.jsx(c,{children:t?n.jsxs(n.Fragment,{children:[n.jsx(S,{children:"USD"}),t==="<$0.01"?n.jsxs(x,{children:[n.jsx(p,{children:"<"}),"$0.01"]}):t]}):s})},D=({quantities:e,tokenPrice:i,tokenSymbol:o="SOL",tokenDecimals:r=9})=>{let t=e.reduce(((u,f)=>u+f),0n),s=i&&o==="SOL"&&r===9?k(t,i):void 0,m=o==="SOL"&&r===9?y(t):`${j(t,r)} ${o}`;return n.jsx(c,{children:s?n.jsx(n.Fragment,{children:s==="<$0.01"?n.jsxs(x,{children:[n.jsx(p,{children:"<"}),"$0.01"]}):s}):m})};let c=l.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,S=l.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,p=l.span`
  font-size: 10px;
`,x=l.span`
  display: flex;
  align-items: center;
`;function v(e,i){return`https://explorer.solana.com/account/${e}?chain=${i}`}const F=e=>n.jsx(w,{href:e.chainType==="ethereum"?g(e.chainId,e.walletAddress):v(e.walletAddress,e.chainId),target:"_blank",children:$(e.walletAddress)});let w=l.a`
  &:hover {
    text-decoration: underline;
  }
`;export{F as S,D as f,P as h,O as p};
