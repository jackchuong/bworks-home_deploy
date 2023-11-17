// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../../src/pages_/create-an-account'
import ns0 from '../../../.locales/vi/common.json'

const namespaces = { 'common': ns0 }

export default function Page(p){
  return (
    <I18nProvider 
      lang="vi" 
      namespaces={namespaces}  
      internals={{"defaultLanguage":"en","isStaticMode":true}}
    >
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C && C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'vi'})
}








