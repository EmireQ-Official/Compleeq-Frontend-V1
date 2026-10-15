import { useMemo, useState } from "react";
import styles from "./WorkspacePages.module.css";

const seed = [
  [
    "SEC Form 10-K Filing",
    "Apex Ltd",
    "US",
    "Federal SEC",
    "Oct 24, 2026",
    "Critical",
    "Sarah Jenkins",
    "High",
  ],
  [
    "VAT Declaration Q3",
    "Vertex Europe",
    "DE",
    "Tax Duty",
    "Oct 28, 2026",
    "Pending",
    "Markus Bauer",
    "Medium",
  ],
  [
    "FCA Annual Submission",
    "UK Brokerage",
    "UK",
    "FCA License",
    "Nov 02, 2026",
    "Compliant",
    "Emily Stone",
    "High",
  ],
  [
    "Bermuda UBO Registry Update",
    "Nova Capital",
    "BM",
    "Ownership",
    "Nov 15, 2026",
    "Not Started",
    "Clara Vance",
    "Medium",
  ],
  [
    "Delaware Franchise Tax",
    "Oceanic LP",
    "US",
    "Franchise Tax",
    "Nov 30, 2026",
    "Not Started",
    "John Doe",
    "Low",
  ],
  [
    "Adverse Media Rescreen",
    "Apex Ltd",
    "Global",
    "AML Screening",
    "Dec 05, 2026",
    "Compliant",
    "James Roy",
    "High",
  ],
  [
    "FinCEN Beneficiary Registry",
    "Oceanic LP",
    "US",
    "Federal KYC",
    "Dec 10, 2026",
    "Compliant",
    "Sarah Jenkins",
    "High",
  ],
  [
    "BaFin Capital Adequacy",
    "Vertex Europe",
    "DE",
    "Regulatory",
    "Dec 15, 2026",
    "Compliant",
    "Markus Bauer",
    "High",
  ],
  [
    "FATCA Tax Reporting",
    "Nova Capital",
    "Global",
    "FATCA Duty",
    "Dec 20, 2026",
    "Pending",
    "Clara Vance",
    "Medium",
  ],
  [
    "GDPR Data Map Audit",
    "Vertex Europe",
    "EU",
    "Privacy Audit",
    "Dec 31, 2026",
    "Not Started",
    "James Roy",
    "Low",
  ],
];

export default function ObligationsPage() {
  const [rows, setRows] = useState(seed);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(
    () =>
      rows.filter(
        (r) =>
          (status === "All" || r[5] === status) &&
          r.join(" ").toLowerCase().includes(query.toLowerCase()),
      ),
    [rows, query, status],
  );
  const add = (e) => {
    e.preventDefault();
    setSaving(true);
    const f = new FormData(e.currentTarget);
    setTimeout(() => {
      setRows([
        [
          f.get("name"),
          f.get("entity"),
          f.get("jurisdiction"),
          "Regulatory",
          f.get("date"),
          "Not Started",
          "Demo Account",
          f.get("priority"),
        ],
        ...rows,
      ]);
      setSaving(false);
      setOpen(false);
    }, 550);
  };
  return (
    <>
      <div className={styles.pageHead}>
        <div>
          <h1>Obligations</h1>
          <p>
            Manage compliance obligations and track real-time filing statuses.
          </p>
        </div>
        <button className={styles.primary} onClick={() => setOpen(true)}>
          ＋ New Obligation
        </button>
      </div>
      <div className={styles.toolbar}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search obligations..."
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>All</option>
          <option>Critical</option>
          <option>Pending</option>
          <option>Compliant</option>
          <option>Not Started</option>
        </select>
        <select>
          <option>Jurisdiction: Global</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>European Union</option>
        </select>
        <select>
          <option>Type: All</option>
          <option>Regulatory</option>
          <option>Tax</option>
        </select>
        <button className={styles.export}>Export CSV</button>
      </div>
      <div className={styles.tableCard}>
        <div className={styles.tableScroll}>
          <table>
            <thead>
              <tr>
                {[
                  "Obligation Name",
                  "Entity",
                  "Jurisdiction",
                  "Type",
                  "Due Date",
                  "Status",
                  "Assigned To",
                  "Priority",
                ].map((x) => (
                  <th key={x}>{x}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r[0]} onClick={() => setSelected(r)}>
                  {r.map((c, i) => (
                    <td key={i}>
                      {i === 5 ? (
                        <span className={styles.status} data-status={c}>
                          ● {c}
                        </span>
                      ) : i === 7 ? (
                        <span data-priority={c}>{c}</span>
                      ) : (
                        <>{c}</>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.pagination}>
          <span>Showing {filtered.length} of 124 obligations</span>
          <div>
            <b>1</b>
            <span>2</span>
            <span>3</span>
            <span>…</span>
            <span>12</span>
          </div>
        </div>
      </div>
      {open && (
        <div className={styles.backdrop} onMouseDown={() => setOpen(false)}>
          <form
            className={styles.modal}
            onSubmit={add}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHead}>
              <div>
                <h2>New obligation</h2>
                <p>Add a compliance requirement to your workspace.</p>
              </div>
              <button type="button" onClick={() => setOpen(false)}>
                ×
              </button>
            </div>
            <label>
              Obligation name
              <input
                name="name"
                required
                placeholder="e.g. Annual registry filing"
              />
            </label>
            <label>
              Entity
              <input
                name="entity"
                required
                placeholder="Select or enter an entity"
              />
            </label>
            <div className={styles.formGrid}>
              <label>
                Jurisdiction
                <input name="jurisdiction" required placeholder="Global" />
              </label>
              <label>
                Due date
                <input name="date" required type="date" />
              </label>
            </div>
            <label>
              Priority
              <select name="priority">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </label>
            <div className={styles.modalActions}>
              <button type="button" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className={styles.primary} disabled={saving}>
                {saving ? "Saving…" : "Create obligation"}
              </button>
            </div>
          </form>
        </div>
      )}
      {selected && (
        <div className={styles.drawer}>
          <button className={styles.close} onClick={() => setSelected(null)}>
            ×
          </button>
          <span className={styles.eyebrow}>OBLIGATION DETAIL</span>
          <h2>{selected[0]}</h2>
          <span className={styles.status} data-status={selected[5]}>
            ● {selected[5]}
          </span>
          {[
            "Entity",
            "Jurisdiction",
            "Type",
            "Due date",
            "Assigned to",
            "Priority",
          ].map((x, i) => (
            <div className={styles.detailRow} key={x}>
              <span>{x}</span>
              <b>{selected[[1, 2, 3, 4, 6, 7][i]]}</b>
            </div>
          ))}
          <button className={styles.primary}>Edit obligation</button>
        </div>
      )}
    </>
  );
}
