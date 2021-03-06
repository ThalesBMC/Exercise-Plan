import Head from 'next/head'
import { ContadorProvider } from '../components/ContadorDeDias'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react"

import Cookies from "js-cookie"
import {GetServerSideProps} from 'next'
import { Contador } from '../components/Contador'

export default function Home(props) {
 
  return (
    <div className={styles.container}>
      <ContadorProvider diaFlexao={props.diaFlexao} diaBarra={props.diaBarra} diaAbs={props.diaAbs}>
       <Contador />
      </ContadorProvider>
    </div>
  )
}
export const getServerSideProps= async(ctx)=>{
  //chamada api
  const {diaFlexao, diaBarra, diaAbs} = ctx.req.cookies;
  return {
    props:{
      diaFlexao: Number(diaFlexao),
      diaAbs: Number(diaAbs),
      diaBarra: Number(diaBarra),
    }
  }
  
}