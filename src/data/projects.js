/**
 * Projects Data Source
 * Contains exactly 3 verified projects with all screenshots and direct access links.
 */

export const projects = [
  {
    id: "excel-financial-tracker",
    slug: "excel-financial-tracker",
    title: "Excel Financial Tracker",
    category: "Financial Systems",
    status: "Live System",
    isFlagship: true,
    blurb: "A clean double-entry Excel setup that balances itself automatically. No broken macros—you just log transactions, and it updates your general ledger, trial balance, and P&L on the fly.",
    tags: ["Excel", "Double-Entry", "General Ledger", "Trial Balance", "Financial Models"],
    metrics: "Always Balanced • Live P&L • Zero Mess",
    excelFileUrl: "https://docs.google.com/spreadsheets/d/1mwsTF09qZhVWn3Rh7-_1AgZ4eWciE0Vr/edit?usp=drive_link&ouid=105124903679081919191&rtpof=true&sd=true",
    liveUrl: "https://docs.google.com/spreadsheets/d/1mwsTF09qZhVWn3Rh7-_1AgZ4eWciE0Vr/edit?usp=drive_link&ouid=105124903679081919191&rtpof=true&sd=true",
    githubUrl: null,
    images: [
      {
        url: "/assets/projects/excel/shot_1.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1y4eB39LGXLmcKHTpvd-Wkwc5eNWLySSs",
        caption: "General Ledger & transaction journal entries",
        driveUrl: "https://drive.google.com/file/d/1y4eB39LGXLmcKHTpvd-Wkwc5eNWLySSs/view?usp=drive_link"
      },
      {
        url: "/assets/projects/excel/shot_2.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1c1rTEfScC_qp-XUU9P2JPAaXtTahezET",
        caption: "Trial balance with instant formula cross-checks",
        driveUrl: "https://drive.google.com/file/d/1c1rTEfScC_qp-XUU9P2JPAaXtTahezET/view?usp=drive_link"
      },
      {
        url: "/assets/projects/excel/shot_3.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1f9F6aWsBDUapyAxq7xQjxU_c-Tfli5ka",
        caption: "Executive dashboard & P&L breakdown",
        driveUrl: "https://drive.google.com/file/d/1f9F6aWsBDUapyAxq7xQjxU_c-Tfli5ka/view?usp=drive_link"
      }
    ]
  },
  {
    id: "11-11-cafe-minglanilla",
    slug: "11-11-cafe-minglanilla",
    title: "11:11 Cafe Minglanilla",
    category: "Web Development",
    status: "Live Website",
    isFlagship: false,
    blurb: "A website I built for a local coffee shop in Minglanilla, Cebu. Fast on phones, clean menu layout, and makes it easy for customers to drop by.",
    tags: ["Vercel", "Web App", "Responsive UI", "Local Business", "Menu Architecture"],
    metrics: "Live on Vercel • Mobile-Friendly • Real Business",
    excelFileUrl: null,
    liveUrl: "https://11-11-cafe-m-inglanilla.vercel.app/",
    githubUrl: null,
    images: [
      {
        url: "/assets/projects/cafe/shot_1.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1I3hr4jYJAdgZ7lWXTQhqLPvYqOXFREb0",
        caption: "11:11 Cafe Minglanilla homepage & cafe vibes",
        driveUrl: "https://drive.google.com/file/d/1I3hr4jYJAdgZ7lWXTQhqLPvYqOXFREb0/view?usp=drive_link"
      },
      {
        url: "/assets/projects/cafe/shot_2.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1FY9TY57Y-7XVqXOI6zuE9dUuGqCar3M1",
        caption: "Food and drinks menu view",
        driveUrl: "https://drive.google.com/file/d/1FY9TY57Y-7XVqXOI6zuE9dUuGqCar3M1/view?usp=drive_link"
      },
      {
        url: "/assets/projects/cafe/shot_3.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1NE5UB_WzXvH6rZJeXIjVmvNdLWRoGO7J",
        caption: "Location, opening hours, and contact details",
        driveUrl: "https://drive.google.com/file/d/1NE5UB_WzXvH6rZJeXIjVmvNdLWRoGO7J/view?usp=drive_link"
      }
    ]
  },
  {
    id: "notion-systems-workspace",
    slug: "notion-systems-workspace",
    title: "Notion Workspace & Systems Setup",
    category: "Productivity & Operations",
    status: "Active Setup",
    isFlagship: false,
    blurb: "My all-in-one Notion workspace with 7 linked databases. Keeps client work, sprint tasks, invoices, and resources organized in one spot so nothing gets lost.",
    tags: ["Notion", "Relational Databases", "Systems Architecture", "Productivity", "7 Database Views"],
    metrics: "7 Connected Databases • Daily Hub • Keeps Work Organized",
    excelFileUrl: null,
    liveUrl: null,
    githubUrl: null,
    images: [
      {
        url: "/assets/projects/notion/shot_1.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1nylS0uiAIMUvX0YhIeHrhW1Em8_ayrVm",
        caption: "Main workspace dashboard & daily hub",
        driveUrl: "https://drive.google.com/file/d/1nylS0uiAIMUvX0YhIeHrhW1Em8_ayrVm/view?usp=drive_link"
      },
      {
        url: "/assets/projects/notion/shot_2.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1jTBLZUlBimyLlb-HpZcgaLPCjr03d_Dk",
        caption: "Client projects and delivery pipeline",
        driveUrl: "https://drive.google.com/file/d/1jTBLZUlBimyLlb-HpZcgaLPCjr03d_Dk/view?usp=drive_link"
      },
      {
        url: "/assets/projects/notion/shot_3.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1HIwBgxZ5MoJ7b48a9O6wrhPyfWRxmBXC",
        caption: "Client CRM and contact list",
        driveUrl: "https://drive.google.com/file/d/1HIwBgxZ5MoJ7b48a9O6wrhPyfWRxmBXC/view?usp=drive_link"
      },
      {
        url: "/assets/projects/notion/shot_4.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1mIScngcTlo_WUMbwNUAvgEG7rKszT-gr",
        caption: "Sprint tasks and priority board",
        driveUrl: "https://drive.google.com/file/d/1mIScngcTlo_WUMbwNUAvgEG7rKszT-gr/view?usp=drive_link"
      },
      {
        url: "/assets/projects/notion/shot_5.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1F8s_VZs6jel4pv8i46_Czd7soz5KIhc3",
        caption: "Billing and finance tracker",
        driveUrl: "https://drive.google.com/file/d/1F8s_VZs6jel4pv8i46_Czd7soz5KIhc3/view?usp=drive_link"
      },
      {
        url: "/assets/projects/notion/shot_6.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1J66Gkuo9Myoit944KoWovE_k6PSlIAE2",
        caption: "Docs and resource library",
        driveUrl: "https://drive.google.com/file/d/1J66Gkuo9Myoit944KoWovE_k6PSlIAE2/view?usp=drive_link"
      },
      {
        url: "/assets/projects/notion/shot_7.png",
        driveCdnUrl: "https://lh3.googleusercontent.com/d/1XbAKcZfh1TLU6Tq8tW5WCBMiCdYfFkdu",
        caption: "Weekly reviews and progress log",
        driveUrl: "https://drive.google.com/file/d/1XbAKcZfh1TLU6Tq8tW5WCBMiCdYfFkdu/view?usp=drive_link"
      }
    ]
  }
];

