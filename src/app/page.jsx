"use client";
import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import styles from './page.module.css'
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} minHeight={160}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">

          <Link href="/stock" style={{ textDecoration: 'none' }}>
            <div className={styles.maninTicon}>
              <Image
                src="/images/stocksicon.jpg"
                width={250}
                height={250}
                alt="Picture of Stock Icon"
              />
            </div>
            <p className={styles.mainTtext}>STOCK</p>
          </Link>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">

          <Link href="/quotation" style={{ textDecoration: 'none' }}>
            <div className={styles.maninTicon} >
              <Image
                src="/images/quoteicon.jpg"
                width={250}
                height={250}
                alt="Picture of quote Icon"
              />
            </div>
            <p className={styles.mainTtext}>QUOTATION</p>
          </Link>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <div className={styles.maninTbutton}>
            <Link href="/invoice" style={{ textDecoration: 'none' }}>
              <div className={styles.maninTicon}><Image
                src="/images/invoiceicon.jpg"
                width={250}
                height={250}
                alt="Picture of Invoice Icon"
              />
              </div>
              <p className={styles.mainTtext}>INVOICE</p>
            </Link>
          </div>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <div className={styles.maninTbutton}>
            <Link href="/customerdetails" style={{ textDecoration: 'none' }}>
              <div className={styles.maninTicon}><Image
                src="/images/custom.jpg"
                width={250}
                height={250}
                alt="Picture of customer-details Icon"
              />
              </div>
              <p className={styles.mainTtext}>Customer Details</p>
            </Link>
          </div>
        </Grid>

      </Grid>
    </Box>

  );
}
