import { Project, Certificate } from './types';

export const SKILLS = [
  "HTML5", "CSS3", "Web App Security", "OS Security", "Security Operations", 
  "Digital Forensics", "Technical Support", "OSI Model", "TCP/IP", 
  "Network Configuration", "Network Connectivity", "Network Protocols", 
  "VLAN", "Inter-VLAN", "Spanning Tree", "WLC", "Switch Security", 
  "Routing IPv4/IPv6", "IPSec", "VPN", "Etherchannel", "FHRP", "VoIP", 
  "Network Troubleshooting", "OSPF", "NAT", "WAN", "QoS", "SDN", 
  "Routing Protocols", "LAN Switching", "Firewalls", "Grafana", "Ubuntu", 
  "SQL Injection", "Zabbix", "Fortigate", "GNS3", "PnetLab", 
  "Information Privacy", "Threat Detection", "Device Maintenance", 
  "Bash", "Powershell", "Azure", "Oracle Cloud", "DNS", "DHCP", 
  "Cloud Computing", "Active Directory", "WordPress", "Virtualization", 
  "VMware ESXi", "vSphere", "VirtualBox", "Proxmox", "Hyper-V", 
  "Automation", "Windows Server", "Cisco Networking", "Oracle SQL Developer", 
  "Network Security", "Git/GitHub", "Red Hat Linux", "Linux Admin", 
  "Packet Tracer", "MySQL", "Python", "C", "Microsoft Exchange", "Entra ID"
];

export const PROJECTS: Project[] = [
  {
    title: "Virtualized Zabbix Project",
    image: "assets/Zabbix.png",
    link: "https://www.linkedin.com/posts/issam-beniysa-1012971aa_servers-networking-server-activity-7198071140139814913-k6C8?utm_source=share&utm_medium=member_desktop",
    description: "Designed and deployed a comprehensive Zabbix monitoring infrastructure on virtualized Linux servers to ensure high availability and proactive fault detection.",
    tech: ["Zabbix", "Linux", "Networking"]
  },
  {
    title: "Virtualization Of SDN",
    image: "assets/SDN.png",
    link: "https://www.linkedin.com/posts/issam-beniysa-1012971aa_opendaylight-sdnvirtualisation-mininetnetworking-activity-7205672801926529024-p8Ju?utm_source=share&utm_medium=member_desktop",
    description: "Software Defined Networking simulation and deployment.",
    tech: ["SDN", "Mininet", "OpenDaylight"]
  },
  {
    title: "WP-Explorer",
    image: "assets/WP-Explorer.jpg",
    link: "https://github.com/3issam-hub/Wp-Explorer",
    description: "Security analysis tool for WordPress installations.",
    tech: ["Python", "Security", "WordPress"]
  }
];

export const CERTIFICATES: Certificate[] = [
  { title: "TryHackMe Pre-Security", image: "assets/THM-6WPY5USSUI.png" },
  { title: "TryHackMe Introduction to Cyber Security", image: "assets/THM-WJWKSDRXAC.png" },
  { title: "SQL Injection", image: "assets/sql_cert.png" },
  { title: "Introduction to Cybersecurity", image: "assets/Introduction_to_Cybersecurity_Badge20240226-29-o9oupt-1.png" },
  { title: "Computer Hardware Basics", image: "assets/Computer_Hardware_Basics_Badge20240226-29-hdqb08-1.png" },
  { title: "Udemy Certificate", image: "assets/UC-a4810231-4cb0-4298-9536-b011bd55ff69.jpg" },
  { title: "Python Programming", image: "assets/issambeniyssa-PYTHON-ID1A-2023-certificate_page-0001.jpg" },
  { title: "CCNA v7 Intro", image: "assets/issambeniysa-CCNAv7 Introduct-certificate_page-0001.jpg" },
  { title: "ISTA Certificate", image: "assets/issambeniysa-ISTAHAYNAHDA-ID2-certificate_page-0001.jpg" },
  { title: "CCNA v7 Enterprise", image: "assets/issambeniyssa-CCNAv7 Enterpris-certificate_page-0001.jpg" },
  { title: "CSS Fundamentals", image: "assets/CSS_Cert.png" },
  { title: "HTML Fundamentals", image: "assets/HTML_Cert.png" }
];