import { Link } from "react-router-dom";
import styles from "./DashboardHome.module.css";

const events = [
  ["OCT", "24", "SEC Form 10-K Filing", "Federal SEC", "Annual report deadline for primary holding structure.", "Critical"],
  ["OCT", "28", "VAT Declaration Q3", "Tax Duty", "Quarterly filing across 12 active European sub-entities.", "Warning"],
  ["NOV", "02", "FCA Annual Review Submission", "FCA Licensing", "License validation for UK brokerage division.", "In Progress"],
  ["NOV", "15", "Bermuda UBO Registry Update", "Ownership Registry", "Mandatory annual confirmation of ultimate beneficial owners.", "Pending"],
  ["NOV", "30", "Corporate Franchise Tax", "Delaware Franchise", "Annual filing and franchise payment scheduled.", "Scheduled"],
];
const entities = [["Apex Global Holdings Ltd","Cayman Islands","High"],["Vertex Tech Europe GmbH","Germany","Medium"],["Oceanic Partners LP","Delaware, US","Low"],["Nova Capital Ltd","United Kingdom","Low"]];

export default function DashboardHome(){return <>
  <section className={styles.heading}><div><h1>Good morning, Demo</h1><p>Your compliance workspace overview is up to date</p></div></section>
  <section className={styles.stats}>
    <Stat label="Health Score" value="94%" note="+1.2% this month" accent="94"/>
    <Stat label="Active Risks" value="23" note="↓ 3 resolved" icon="⌁"/>
    <Stat label="Pending Actions" value="12" note="4 urgent reviews" icon="△" warning/>
    <Stat label="Entities Monitored" value="1,847" note="+18 this week" icon="⌁"/>
    <Stat label="Upcoming Obligations" value="8" note="Next due in 3d" icon="□"/>
  </section>
  <div className={styles.grid}>
    <div>
      <section className={styles.card}><div className={styles.cardTitle}><div><h2>Risk Distribution Overview</h2><p>Active threat matrix across globally monitored entities</p></div><button>All Jurisdictions</button></div><div className={styles.riskBar}><i/><i/><i/></div><div className={styles.riskCounts}><div><span>● Low Risk</span><b>14</b></div><div><span>● Medium Risk</span><b>6</b></div><div><span>● Critical Risk</span><b>3</b></div></div></section>
      <section className={styles.card}><div className={styles.cardTitle}><div><h2>Compliance Calendar</h2><p>Critical upcoming tax, licensing, and corporate milestones</p></div><Link to="/dashboard/calendar">View full calendar</Link></div><div className={styles.events}>{events.map(e=><div className={styles.event} key={e[2]}><div className={styles.date}><small>{e[0]}</small><b>{e[1]}</b></div><div className={styles.eventCopy}><b>{e[2]} <small>• {e[3]}</small></b><span>{e[4]}</span></div><em data-status={e[5]}>{e[5]}</em></div>)}</div></section>
    </div>
    <div>
      <section className={`${styles.card} ${styles.analyst}`}><div className={styles.analystHead}>✣ &nbsp; COMPLEEQ AI Analyst <small>ACTIVE</small></div>{["3 new ultimate ownership changes detected in UK subsidiary structures.","2 sanctions alerts matched adverse media flags on secondary entity profile.","5 regulatory obligations require immediate signature authorization."].map((x,i)=><div className={styles.insight} key={x}><span>ⓘ</span><p>{x}<Link to="/dashboard/ai-analyst">{["Review structure","Examine matches","Sign disclosures"][i]}</Link></p></div>)}</section>
      <section className={styles.card}><div className={styles.cardTitle}><div><h2>Entity Intelligence</h2><p>High-risk monitored entities</p></div></div>{entities.map(e=><div className={styles.entity} key={e[0]}><div><b>{e[0]}</b><span>{e[1]}</span></div><em data-risk={e[2]}>{e[2]}</em></div>)}</section>
      <section className={styles.card}><div className={styles.cardTitle}><div><h2>Recent Activity Timeline</h2></div></div>{["AI analyst matched 3 UBO shareholders with FATCA database requirements.","KYC validation updated for Zenith Apex Holdings LLC.","Sanctions list lookup scheduled on domestic entity roster.","UBO registry certificate renewed automatically.","New verification task assigned to Compliance Officer."].map((x,i)=><div className={styles.activity} key={x}><i/><p>{x}<small>{["10m ago","1h ago","4h ago","1d ago","2d ago"][i]}</small></p></div>)}</section>
    </div>
  </div>
 </>}

function Stat({label,value,note,icon,accent,warning}){return <div className={styles.stat}><span>{label}</span><strong>{value}</strong><small className={warning?styles.warn:""}>{note}</small>{accent?<i className={styles.score}>{accent}</i>:<i className={styles.statIcon}>{icon}</i>}</div>}
