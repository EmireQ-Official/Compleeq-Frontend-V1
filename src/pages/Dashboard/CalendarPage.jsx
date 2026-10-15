import { useMemo, useState } from "react";
import styles from "./CalendarPage.module.css";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const seed = [
  [1,"VAT Declaration Q3","Vertex Tech Europe GmbH",2,"Tax","warning","09:00"],
  [2,"SEC Form 10-K Filing","Apex Global Holdings Ltd",6,"Regulatory","critical","11:30"],
  [3,"AML quarterly review","Oceanic Partners LP",9,"AML","normal","14:00"],
  [4,"FCA annual submission","UK Brokerage Division",14,"Licensing","critical","10:00"],
  [5,"UBO Registry Update","Nova Capital Ltd",18,"Ownership","warning","16:00"],
  [6,"KYC evidence refresh","Apex Global Holdings Ltd",21,"KYC","normal","09:30"],
  [7,"Corporate tax review","Vertex Tech Europe GmbH",25,"Tax","normal","13:00"],
  [8,"License renewal","Oceanic Partners LP",29,"Licensing","warning","15:30"],
].map(([id,title,entity,day,type,priority,time])=>({id,title,entity,day,type,priority,time}));

function calendarDays(year, month) {
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const count = new Date(year, month + 1, 0).getDate();
  const previous = new Date(year, month, 0).getDate();
  return Array.from({length:42},(_,index)=>{const raw=index-offset+1;if(raw<1)return{day:previous+raw,outside:true};if(raw>count)return{day:raw-count,outside:true};return{day:raw,outside:false};});
}

export default function CalendarPage(){
 const [cursor,setCursor]=useState(new Date(2026,9,1));const [events,setEvents]=useState(seed);const [type,setType]=useState("All events");const [modalDay,setModalDay]=useState(null);const [selected,setSelected]=useState(null);const [saving,setSaving]=useState(false);
 const days=useMemo(()=>calendarDays(cursor.getFullYear(),cursor.getMonth()),[cursor]);
 const visible=useMemo(()=>events.filter(event=>type==="All events"||event.type===type),[events,type]);
 const move=amount=>setCursor(value=>new Date(value.getFullYear(),value.getMonth()+amount,1));
 const add=event=>{event.preventDefault();const form=new FormData(event.currentTarget);setSaving(true);window.setTimeout(()=>{setEvents(items=>[...items,{id:Date.now(),title:form.get("title"),entity:form.get("entity"),day:Number(form.get("day")),type:form.get("type"),priority:form.get("priority"),time:form.get("time")}]);setSaving(false);setModalDay(null)},500)};
 return <>
  <div className={styles.pageHead}><div><h1>Compliance Calendar</h1><p>Manage deadlines, regulatory filings, and review schedules.</p></div><button className={styles.primary} onClick={()=>setModalDay(15)}>＋ Add Event</button></div>
  <section className={styles.summary}><Metric label="Upcoming this month" value={visible.length} note="Across all entities"/><Metric label="Critical deadlines" value={visible.filter(event=>event.priority==="critical").length} note="Immediate attention"/><Metric label="Due in next 7 days" value="3" note="1 assigned to you"/><Metric label="Completed this month" value="19" note="＋12% vs last month"/></section>
  <section className={styles.calendarCard}>
   <div className={styles.calendarToolbar}><div className={styles.monthControls}><button onClick={()=>move(-1)}>‹</button><h2>{MONTHS[cursor.getMonth()]} {cursor.getFullYear()}</h2><button onClick={()=>move(1)}>›</button><button className={styles.today} onClick={()=>setCursor(new Date(2026,9,1))}>Today</button></div><div className={styles.filters}><select value={type} onChange={event=>setType(event.target.value)}>{["All events","Regulatory","Tax","Licensing","AML","KYC","Ownership"].map(item=><option key={item}>{item}</option>)}</select><button className={styles.viewActive}>Month</button><button>List</button></div></div>
   <div className={styles.weekdays}>{WEEKDAYS.map(day=><span key={day}>{day}</span>)}</div>
   <div className={styles.calendarGrid}>{days.map((cell,index)=>{const items=cell.outside?[]:visible.filter(event=>event.day===cell.day);return <button className={`${styles.day} ${cell.outside?styles.outside:""}`} key={`${cell.day}-${index}`} onDoubleClick={()=>!cell.outside&&setModalDay(cell.day)}><span className={cell.day===15&&!cell.outside?styles.currentDay:""}>{cell.day}</span><div>{items.map(item=><i key={item.id} data-priority={item.priority} onClick={event=>{event.stopPropagation();setSelected(item)}}><b>{item.time}</b>{item.title}</i>)}</div></button>})}</div>
  </section><p className={styles.hint}>Tip: double-click a calendar date to create a new event.</p>
  {modalDay!==null&&<div className={styles.backdrop} onMouseDown={()=>setModalDay(null)}><form className={styles.modal} onSubmit={add} onMouseDown={event=>event.stopPropagation()}><div className={styles.modalHead}><div><span>CALENDAR EVENT</span><h2>Add compliance event</h2><p>Create a filing, review, or renewal deadline.</p></div><button type="button" onClick={()=>setModalDay(null)}>×</button></div><label>Event name<input name="title" required placeholder="e.g. Annual compliance review"/></label><label>Entity<select name="entity"><option>Apex Global Holdings Ltd</option><option>Vertex Tech Europe GmbH</option><option>Oceanic Partners LP</option><option>Nova Capital Ltd</option></select></label><div className={styles.formGrid}><label>Day<input name="day" type="number" min="1" max="31" defaultValue={modalDay} required/></label><label>Time<input name="time" type="time" defaultValue="09:00" required/></label></div><div className={styles.formGrid}><label>Event type<select name="type"><option>Regulatory</option><option>Tax</option><option>Licensing</option><option>AML</option><option>KYC</option><option>Ownership</option></select></label><label>Priority<select name="priority"><option value="normal">Normal</option><option value="warning">Warning</option><option value="critical">Critical</option></select></label></div><div className={styles.modalActions}><button type="button" onClick={()=>setModalDay(null)}>Cancel</button><button className={styles.primary} disabled={saving}>{saving?"Saving…":"Add event"}</button></div></form></div>}
  {selected&&<aside className={styles.drawer}><button className={styles.close} onClick={()=>setSelected(null)}>×</button><span className={styles.eyebrow}>EVENT DETAIL</span><h2>{selected.title}</h2><em data-priority={selected.priority}>{selected.priority==="critical"?"Critical":selected.priority==="warning"?"Attention":"Scheduled"}</em>{[["Entity",selected.entity],["Date",`${MONTHS[cursor.getMonth()]} ${selected.day}, ${cursor.getFullYear()}`],["Time",selected.time],["Category",selected.type],["Owner","Demo Account"]].map(([label,value])=><div className={styles.detailRow} key={label}><span>{label}</span><b>{value}</b></div>)}<button className={styles.primary}>Edit event</button><button className={styles.delete} onClick={()=>{setEvents(items=>items.filter(item=>item.id!==selected.id));setSelected(null)}}>Delete event</button></aside>}
 </>;
}

function Metric({label,value,note}){return <div><span>{label}</span><b>{value}</b><small>{note}</small></div>}
