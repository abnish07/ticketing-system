import React from "react";
import {
  ACCOUNTS_PATH,
  AUFTRAG_PATH,
  DASHBOARD_PATH,
  LEADS_PATH,
  ORDERS_PATH,
  REPORT_PATH,
  WORKSHOP_ACCOUNT_PATH,
  CONTACT_INFO_PATH,
} from "../constants/endpoints";

export const sidebarMenuItems = ["dashboard", "contactInfo"];
export const menuItems = {
  dashboard: {
    icon: <i className="bi bi-house" />,
    name: "Dashboard",
    url: DASHBOARD_PATH,
  },
  workshop: {
    icon: <i className="bi bi-gear-wide-connected" />,
    name: "Workshop Account",
    url: WORKSHOP_ACCOUNT_PATH,
  },
  auftrag: {
    icon: <i className="bi bi-bar-chart" />,
    name: "Auftrag",
    url: AUFTRAG_PATH,
  },
  leads: {
    icon: <i className="bi bi-person-standing" />,
    name: "Lead",
    url: LEADS_PATH,
  },
  contactInfo: {
    icon: <i className="bi bi-person-lines-fill" />,
    name: "Contact Info",
    url: CONTACT_INFO_PATH,
  },
  accounts: {
    icon: <i className="bi bi-person-circle" />,
    name: "Accounts",
    url: ACCOUNTS_PATH,
  },
  report: {
    icon: <i className="bi bi-people" />,
    name: "Report",
    url: REPORT_PATH,
  },
  orders: {
    icon: <i className="bi bi-people" />,
    name: "Orders",
    url: ORDERS_PATH,
  },
};
