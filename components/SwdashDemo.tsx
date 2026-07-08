"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Tab = "xp" | "slay" | "barter" | "food" | "loot" | "log";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "xp", label: "XP Tracker", icon: "📊" },
  { id: "slay", label: "Slay", icon: "⚔️" },
  { id: "barter", label: "Barter", icon: "💰" },
  { id: "food", label: "Food / HP", icon: "🍖" },
  { id: "loot", label: "Loot Log", icon: "🎒" },
  { id: "log", label: "Activity", icon: "📜" },
];

const sessionXp = [
  { skill: "Vigor", xpGained: 4, xpHr: 288 },
  { skill: "Cook", xpGained: 1247, xpHr: 12840 },
  { skill: "Mine", xpGained: 892, xpHr: 9130 },
  { skill: "Bard", xpGained: 3841, xpHr: 24500 },
];

const slayTasks = [
  { mob: "Feeble Mushroom", count: 51, master: "Valthor (Feeble)", hasDiary: true },
  { mob: "Feeble Zombie", count: 57, master: "Valthor (Feeble)", hasDiary: true },
  { mob: "Feeble Rat", count: 65, master: "Valthor (Feeble)", hasDiary: true },
  { mob: "Feeble Spark Slime", count: 53, master: "Valthor (Feeble)", hasDiary: false },
];

const slayMasters = [
  { name: "Valthor", tier: "Feeble", range: "Slay 1-30", active: true },
  { name: "Seraphine", tier: "Dire", range: "Slay 30-50", active: false },
  { name: "Draven", tier: "Savage", range: "Slay 50-70", active: false },
];

const barterItems = [
  { name: "Eagle Seed", tier: "T4", type: "SELL", pct: 115, tag: "milestone" as const, buyBar: 30, sellBar: 85 },
  { name: "Silk Thread", tier: "T2", type: "SELL", pct: 104, tag: "milestone" as const, buyBar: 25, sellBar: 72 },
  { name: "Skirmish Root", tier: "T0", type: "BUY", pct: 131, tag: null, buyBar: 45, sellBar: 0 },
  { name: "Iron Shield", tier: "T2", type: "SELL", pct: 51, tag: "poor" as const, buyBar: 15, sellBar: 35 },
  { name: "Chitin Body", tier: "T7", type: "SELL", pct: 108, tag: "milestone" as const, buyBar: 20, sellBar: 90 },
];

const barterTopItems = [
  { name: "Iridium Axe", tier: "T7", bought: 86, sold: 0, net: "-298.3k" },
  { name: "Chitin Body", tier: "T7", bought: 0, sold: 43, net: "+153.8k" },
  { name: "Platinum Platelegs", tier: "T6", bought: 71, sold: 0, net: "-98.1k" },
  { name: "Fur Buckler", tier: "T4", bought: 0, sold: 87, net: "+66.6k" },
];

const barterHistory = [
  { type: "SELL", item: "Chitin Body", tier: "T7", tag: "milestone" as const, qty: 43, pct: 108, time: "27m ago", gold: "+153.8k" },
  { type: "SELL", item: "Fur Buckler", tier: "T4", tag: "milestone" as const, qty: 87, pct: 109, time: "28m ago", gold: "+66.6k" },
  { type: "SELL", item: "Tin Dagger", tier: "T1", tag: "milestone" as const, qty: 142, pct: 107, time: "32m ago", gold: "+9.1k" },
];

const foodItems = [
  { name: "Jelly", tier: "T8", qty: 1, hp: 79, per: 79.0, color: "text-fuchsia-400" },
  { name: "Stinger", tier: "T7", qty: 25, hp: 1800, per: 72.0, color: "text-red-400" },
  { name: "Octopus", tier: "T5", qty: 1, hp: 57, per: 57.0, color: "text-orange-400" },
  { name: "Life Soup", tier: "T5", qty: 1, hp: 28, per: 28.0, color: "text-orange-400" },
  { name: "Lobster", tier: "T3", qty: 1, hp: 43, per: 43.0, color: "text-yellow-400" },
  { name: "Life Soup", tier: "T3", qty: 2, hp: 42, per: 21.0, color: "text-yellow-400" },
  { name: "Life Soup", tier: "T2", qty: 1, hp: 16, per: 16.0, color: "text-emerald-400" },
  { name: "Perch", tier: "T1", qty: 28, hp: 588, per: 21.0, color: "text-emerald-400" },
  { name: "Shrimp", tier: "T0", qty: 8, hp: 80, per: 10.0, color: "text-zinc-300" },
  { name: "Life Soup", tier: "T0", qty: 3, hp: 15, per: 5.0, color: "text-zinc-300" },
];

const recentDamage = [
  { source: "Lizardman T4", dmg: -9, time: "22s ago" },
  { source: "Vampire T4", dmg: -17, time: "26s ago" },
  { source: "Imp T4", dmg: -12, time: "1m ago" },
  { source: "Ghost T4", dmg: -4, time: "1m ago" },
];

const lootSources = [
  {
    name: "Dire Dungeon",
    clears: 241,
    items: [
      { icon: "🟢", count: 291 }, { icon: "🔵", count: 93 }, { icon: "🔴", count: 209 },
      { icon: "⚪", count: 248 }, { icon: "🟡", count: 109 }, { icon: "🗡️", count: 278 },
    ],
  },
  {
    name: "Savage Dungeon",
    clears: 88,
    items: [
      { icon: "🟢", count: 127 }, { icon: "🔵", count: 185 }, { icon: "🔴", count: 144 },
      { icon: "⚪", count: 179 }, { icon: "🟡", count: 88 },
    ],
  },
];

const activityLog = [
  { icon: "⚒️", text: "Task completed! Smith at Shortha Foundry — +69.5k xp in 9m 26s (441.7k/hr)", time: "5m ago", type: "task" },
  { icon: "🎉", text: "Level up! Draw level is now 63.", time: "14m ago", type: "level" },
  { icon: "🎉", text: "Level up! Sight level is now 63.", time: "14m ago", type: "level" },
  { icon: "⚒️", text: "Task completed! Craft at Shortha Atelier — +94.3k xp in 13m 1s (434.7k/hr)", time: "14m ago", type: "task" },
  { icon: "💎", text: "Level up! Defend level is now 70.", time: "24m ago", type: "level" },
  { icon: "⚒️", text: "Task completed! Mine at Sootstep Crater — +122.0k xp in 14m 25s (507.5k/hr)", time: "27m ago", type: "task" },
  { icon: "🎉", text: "Level up! Luck level is now 83.", time: "30m ago", type: "level" },
  { icon: "🎉", text: "Level up! Craft level is now 77.", time: "34m ago", type: "level" },
  { icon: "🎉", text: "Level up! Barter level is now 73.", time: "35m ago", type: "level" },
  { icon: "✨", text: "Stable Crystal teleported to Sootstep", time: "41m ago", type: "event" },
];

/* ── shared pieces ── */

function Bar({ pct, color = "bg-yellow-500" }: { pct: number; color?: string }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-zinc-800/80">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  );
}

function StatCard({ value, label, color = "text-yellow-400" }: { value: string; label: string; color?: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-zinc-700/60 bg-zinc-900/60 px-3 py-2.5">
      <p className={`text-lg font-bold tabular-nums ${color}`}>{value}</p>
      <p className="mt-0.5 text-[10px] uppercase tracking-widest text-zinc-500">{label}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-zinc-500">
      {children}
    </p>
  );
}

/* ── tabs ── */

function XpTab() {
  const totalXp = sessionXp.reduce((a, b) => a + b.xpGained, 0);
  const totalHr = sessionXp.reduce((a, b) => a + b.xpHr, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <StatCard value="1,151" label="Total Level" />
        <StatCard value="22.38M" label="Total XP" />
        <StatCard value="280" label="XP / HR" />
      </div>

      <div className="rounded-lg border border-emerald-800/40 bg-emerald-950/30 px-4 py-2.5">
        <p className="text-xs text-emerald-400">
          <span className="font-semibold">Close to leveling:</span>{" "}
          Bard (98%) · Fish (96%) · Dodge (95%)
        </p>
      </div>

      <div>
        <SectionLabel>
          Session XP <span className="text-zinc-600">(7m 22s)</span>
        </SectionLabel>
        <div className="overflow-hidden rounded-lg border border-zinc-800/60">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-zinc-800/60 bg-zinc-900/40 text-[10px] uppercase tracking-wider text-zinc-500">
                <th className="px-4 py-2 text-left font-medium">Skill</th>
                <th className="px-4 py-2 text-left font-medium">Progress</th>
                <th className="px-4 py-2 text-right font-medium">XP</th>
                <th className="px-4 py-2 text-right font-medium">XP/HR</th>
              </tr>
            </thead>
            <tbody>
              {sessionXp.map((s) => (
                <tr key={s.skill} className="border-b border-zinc-800/30">
                  <td className="px-4 py-2.5 text-zinc-300">{s.skill}</td>
                  <td className="px-4 py-2.5">
                    <div className="w-full max-w-[200px]">
                      <Bar pct={Math.min((s.xpGained / 5000) * 100, 100)} />
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-zinc-200">{s.xpGained.toLocaleString()}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-zinc-500">{s.xpHr.toLocaleString()}</td>
                </tr>
              ))}
              <tr className="bg-zinc-900/30">
                <td className="px-4 py-2.5 font-medium text-zinc-400">Total</td>
                <td className="px-4 py-2.5" />
                <td className="px-4 py-2.5 text-right tabular-nums font-medium text-zinc-200">{totalXp.toLocaleString()}</td>
                <td className="px-4 py-2.5 text-right tabular-nums text-zinc-500">{totalHr.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <SectionLabel>Near Level Up</SectionLabel>
        <div className="space-y-3">
          {[
            { name: "Bard", level: 68, pct: 98 },
            { name: "Fish", level: 57, pct: 96 },
            { name: "Dodge", level: 5, pct: 95 },
          ].map((s) => (
            <div key={s.name}>
              <div className="mb-1 flex items-baseline justify-between text-xs">
                <span className="text-zinc-300">
                  {s.name} <span className="text-zinc-600">Lv.{s.level}</span>
                </span>
                <span className="tabular-nums text-yellow-500">{s.pct}%</span>
              </div>
              <Bar pct={s.pct} color="bg-emerald-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlayTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-3">
        <StatCard value="15" label="Slay Level" />
        <StatCard value="—" label="XP / HR" />
        <StatCard value="23" label="Tasks Done" />
        <StatCard value="361" label="Kills / HR" />
      </div>

      <div className="rounded-lg border border-yellow-700/30 bg-yellow-950/20 p-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800/80 text-2xl">🍄</div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-yellow-400">Feeble Mushroom</p>
            <p className="mt-0.5 text-xs text-zinc-400">0 / 51 kills</p>
            <p className="mt-0.5 text-[11px] text-zinc-600">~4.0s/kill · +6s respawn · 361.4 kills/hr · 15 xp/kill</p>
          </div>
        </div>
        <p className="mt-3 text-[11px] text-zinc-500">
          Next master: <span className="text-yellow-500">Seraphine</span> at Slay 30
        </p>
      </div>

      <div>
        <SectionLabel>Slay Masters</SectionLabel>
        <div className="space-y-2">
          {slayMasters.map((m) => (
            <div
              key={m.name}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${
                m.active ? "border-yellow-700/40 bg-yellow-950/20" : "border-zinc-800/60 bg-zinc-900/30"
              }`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800/60 text-base">⚔️</div>
              <div className="flex-1">
                <p className={`text-sm ${m.active ? "font-medium text-yellow-400" : "text-zinc-400"}`}>
                  {m.name} <span className="text-zinc-600">({m.tier})</span>
                  {m.active && <span className="ml-2 text-xs text-emerald-500">● Active</span>}
                </p>
                <p className="text-[11px] text-zinc-600">{m.range}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>Task Queue</SectionLabel>
        <div className="overflow-hidden rounded-lg border border-zinc-800/60">
          {slayTasks.map((t, i) => (
            <div key={i} className={`flex items-center justify-between px-4 py-2.5 text-xs ${i > 0 ? "border-t border-zinc-800/40" : ""}`}>
              <span className="text-zinc-300">
                {t.hasDiary && <span className="mr-1.5 text-emerald-500">📖</span>}
                Kill {t.count} {t.mob}
              </span>
              <span className="text-zinc-600">{t.master}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BarterTab() {
  const [filter, setFilter] = useState<"all" | "buy" | "sell">("all");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <StatCard value="157" label="Bought" />
        <StatCard value="776" label="Sold" />
        <StatCard value="-88.1k" label="Net Gold" color="text-red-400" />
      </div>

      <div>
        <SectionLabel>Last Known Favor <span className="text-zinc-600">(Panel Closed)</span></SectionLabel>
        <div className="overflow-hidden rounded-lg border border-zinc-800/60">
          {barterItems.map((item, i) => (
            <div key={item.name} className={`px-4 py-3 ${i > 0 ? "border-t border-zinc-800/40" : ""}`}>
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-300">
                  <span className="text-zinc-500">[{item.tier}]</span> {item.name}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold ${item.type === "SELL" ? "text-red-400" : "text-emerald-400"}`}>
                    {item.type}
                  </span>
                  <span className="text-sm font-semibold tabular-nums text-yellow-400">{item.pct}%</span>
                  {item.tag && (
                    <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase ${
                      item.tag === "milestone" ? "bg-emerald-900/50 text-emerald-400" : "bg-red-900/50 text-red-400"
                    }`}>
                      {item.tag === "milestone" ? "Milestone" : "Poor Deal"}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <div className="relative h-1.5 rounded-full bg-red-500/70">
                  {item.buyBar > 0 && (
                    <div className="absolute top-1/2 h-3 w-0.5 -translate-y-1/2 rounded-full bg-white/90" style={{ left: `${item.buyBar}%` }} />
                  )}
                </div>
                <div className="relative h-1.5 rounded-full bg-emerald-500/70">
                  {item.sellBar > 0 && (
                    <div className="absolute top-1/2 h-3 w-0.5 -translate-y-1/2 rounded-full bg-white/90" style={{ left: `${item.sellBar}%` }} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>Top Items</SectionLabel>
        <div className="overflow-hidden rounded-lg border border-zinc-800/60">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-zinc-800/60 bg-zinc-900/40 text-[10px] uppercase tracking-wider text-zinc-500">
                <th className="px-4 py-2 text-left font-medium">Item</th>
                <th className="px-4 py-2 text-right font-medium">Bought</th>
                <th className="px-4 py-2 text-right font-medium">Sold</th>
                <th className="px-4 py-2 text-right font-medium">Net</th>
              </tr>
            </thead>
            <tbody>
              {barterTopItems.map((item) => (
                <tr key={item.name} className="border-b border-zinc-800/30">
                  <td className="px-4 py-2.5 text-zinc-300"><span className="text-zinc-600">[{item.tier}]</span> {item.name}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-zinc-400">{item.bought}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-zinc-400">{item.sold}</td>
                  <td className={`px-4 py-2.5 text-right tabular-nums font-medium ${item.net.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{item.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <SectionLabel>Trade History</SectionLabel>
        <div className="mb-3 flex items-center gap-3">
          <input
            type="text"
            placeholder="Search items..."
            className="flex-1 rounded-lg border border-zinc-700/60 bg-zinc-900/40 px-3 py-1.5 text-xs text-zinc-300 placeholder:text-zinc-600 focus:border-yellow-600/60 focus:outline-none"
          />
          <div className="flex gap-1">
            {(["all", "buy", "sell"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-md px-3 py-1.5 text-[11px] capitalize transition ${
                  filter === f ? "bg-zinc-700/80 text-zinc-200" : "bg-zinc-900/40 text-zinc-500 hover:text-zinc-400"
                }`}
              >
                {f === "all" ? "All" : f}
              </button>
            ))}
          </div>
        </div>
        <p className="mb-2 text-[11px] text-zinc-500">24 trades</p>
        <div className="overflow-hidden rounded-lg border border-zinc-800/60">
          {barterHistory.map((trade, i) => (
            <div key={i} className={`flex items-center justify-between px-4 py-2.5 text-xs ${i > 0 ? "border-t border-zinc-800/40" : ""}`}>
              <div className="flex items-center gap-2">
                <span className={`font-bold ${trade.type === "SELL" ? "text-red-400" : "text-emerald-400"}`}>{trade.type}</span>
                <span className="text-zinc-300"><span className="text-zinc-600">[{trade.tier}]</span> {trade.item}</span>
                <span className="rounded bg-emerald-900/50 px-1.5 py-0.5 text-[9px] font-bold uppercase text-emerald-400">Milestone</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-600">x{trade.qty} @ {trade.pct}%</span>
                <span className="font-medium text-emerald-400">{trade.gold}</span>
                <span className="text-zinc-600">{trade.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FoodTab() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-zinc-800/60 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-zinc-500">Current HP</span>
          <span className="text-lg font-bold text-emerald-400">176 / 176</span>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-zinc-800/80">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-emerald-500"
          />
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-zinc-800/40 pt-3">
          <span className="text-xs text-zinc-400">Banked Healing</span>
          <span className="text-sm font-bold text-cyan-400">+553,844 💙</span>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-zinc-800/60">
        <table className="w-full text-xs">
          <tbody>
            {[
              { label: "Damage taken (session)", value: "42 hp", color: "text-zinc-300" },
              { label: "Healed from food (session)", value: "2,748 hp", color: "text-emerald-400", sub: "(71 eaten)" },
              { label: "Net HP", value: "270 hp", color: "text-emerald-400" },
              { label: "Passive healing", value: "195 hp", color: "text-zinc-300", sub: "(vampire amulet, specials, etc.)" },
              { label: "Overheal (wasted)", value: "76 hp", color: "text-red-400" },
            ].map((row, i) => (
              <tr key={row.label} className={i > 0 ? "border-t border-zinc-800/30" : ""}>
                <td className="px-4 py-2.5 text-zinc-400">
                  {row.label}
                  {row.sub && <span className="text-zinc-600"> {row.sub}</span>}
                </td>
                <td className={`px-4 py-2.5 text-right font-medium tabular-nums ${row.color}`}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <SectionLabel>Food Eaten</SectionLabel>
        <div className="overflow-hidden rounded-lg border border-zinc-800/60">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-zinc-800/60 bg-zinc-900/40 text-[10px] uppercase tracking-wider text-zinc-500">
                <th className="px-4 py-2 text-left font-medium">Item</th>
                <th className="px-4 py-2 text-right font-medium">Qty</th>
                <th className="px-4 py-2 text-right font-medium">Total HP</th>
                <th className="px-4 py-2 text-right font-medium">Per Item</th>
              </tr>
            </thead>
            <tbody>
              {foodItems.map((f, i) => (
                <tr key={f.name + f.tier + i} className={i > 0 ? "border-t border-zinc-800/30" : ""}>
                  <td className={`px-4 py-2 ${f.color}`}>
                    <span className="font-semibold">[{f.tier}]</span> {f.name}
                  </td>
                  <td className="px-4 py-2 text-right tabular-nums text-zinc-400">x{f.qty}</td>
                  <td className="px-4 py-2 text-right tabular-nums font-medium text-emerald-400">{f.hp} hp</td>
                  <td className="px-4 py-2 text-right tabular-nums text-zinc-600">{f.per}/ea</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <SectionLabel>Recent Damage</SectionLabel>
        <div className="overflow-hidden rounded-lg border border-zinc-800/60">
          <table className="w-full text-xs">
            <tbody>
              {recentDamage.map((d, i) => (
                <tr key={i} className={i > 0 ? "border-t border-zinc-800/30" : ""}>
                  <td className="px-4 py-2.5 text-zinc-300">{d.source}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums font-medium text-red-400">{d.dmg}</td>
                  <td className="px-4 py-2.5 text-right text-zinc-600">{d.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function LootTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-3">
        <StatCard value="31" label="Sources" />
        <StatCard value="246.8k" label="Items" />
        <StatCard value="2.67M" label="XP Earned" />
        <StatCard value="12.6k" label="Gold" />
      </div>

      <div className="space-y-4">
        {lootSources.map((source) => (
          <div key={source.name} className="rounded-lg border border-zinc-800/60 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-300">{source.name}</span>
              <span className="text-xs text-emerald-500">+{source.clears} clears</span>
            </div>
            <div className="mt-3 grid grid-cols-6 gap-2">
              {source.items.map((item, i) => (
                <div key={i} className="flex flex-col items-center rounded-md border border-zinc-800/60 bg-zinc-950/40 p-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="mt-0.5 text-[10px] tabular-nums text-emerald-500">x{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-zinc-800/60 p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-sm">🐾</span>
          <span className="text-xs font-medium text-zinc-400">Pets</span>
        </div>
        <div className="grid grid-cols-8 gap-2">
          {["🐺", "🦊", "🐻", "🦉", "🐍", "🐲", "🦇", "🐾"].map((pet, i) => (
            <div key={i} className="flex flex-col items-center rounded-md border border-zinc-800/60 bg-zinc-950/40 p-2">
              <span className="text-lg">{pet}</span>
              <span className="mt-0.5 text-[10px] tabular-nums text-zinc-500">x{[2, 1, 1, 1, 1, 1, 1, 1][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActivityLogTab() {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800/60">
      {activityLog.map((entry, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 px-4 py-3 ${i > 0 ? "border-t border-zinc-800/30" : ""}`}
        >
          <span className="mt-0.5 text-base">{entry.icon}</span>
          <p className={`flex-1 text-sm leading-relaxed ${
            entry.type === "level" ? "text-yellow-400" : entry.type === "task" ? "text-zinc-300" : "text-cyan-400"
          }`}>
            {entry.text}
          </p>
          <span className="shrink-0 pt-0.5 text-xs text-zinc-600">{entry.time}</span>
        </div>
      ))}
    </div>
  );
}

/* ── main component ── */

export default function SwdashDemo() {
  const [activeTab, setActiveTab] = useState<Tab>("xp");

  return (
    <div
      className="mx-auto w-full max-w-[780px] overflow-hidden rounded-xl border border-zinc-700/60 shadow-2xl shadow-black/60"
      style={{ background: "linear-gradient(180deg, #18181c 0%, #111114 100%)" }}
    >
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-zinc-700/60 px-5 py-2.5">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-wide text-zinc-100">SWDASH</span>
          <span className="text-[11px] text-zinc-600">v2.4.1</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="flex h-5 w-5 items-center justify-center rounded text-[10px] text-zinc-500 transition hover:bg-zinc-800 hover:text-zinc-300" title="Refresh">↻</button>
          <button className="flex h-5 w-5 items-center justify-center rounded text-[10px] text-zinc-500 transition hover:bg-zinc-800 hover:text-zinc-300" title="Minimize">—</button>
          <button className="flex h-5 w-5 items-center justify-center rounded text-[10px] text-zinc-500 transition hover:bg-zinc-800 hover:text-red-400" title="Close">✕</button>
        </div>
      </div>

      {/* nav */}
      <div className="grid grid-cols-6 border-b border-zinc-800/60 bg-zinc-900/30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center gap-2 py-2.5 text-xs transition ${
              activeTab === tab.id
                ? "border-b-2 border-yellow-500 bg-zinc-800/30 font-medium text-zinc-100"
                : "text-zinc-500 hover:bg-zinc-800/20 hover:text-zinc-400"
            }`}
          >
            <span className="text-sm">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* content */}
      <div className="max-h-[480px] overflow-y-auto p-5">
        {activeTab === "xp" && <XpTab />}
        {activeTab === "slay" && <SlayTab />}
        {activeTab === "barter" && <BarterTab />}
        {activeTab === "food" && <FoodTab />}
        {activeTab === "loot" && <LootTab />}
        {activeTab === "log" && <ActivityLogTab />}
      </div>

      {/* footer */}
      <div className="border-t border-zinc-800/60 px-5 py-2 text-center text-[10px] tracking-wide text-zinc-600">
        DEMO — No live game data
      </div>
    </div>
  );
}
