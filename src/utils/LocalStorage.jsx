  
const Employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "em@ex.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI using React",
        taskDate: "2026-02-16",
        taskCategory: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile view navbar issue",
        taskDate: "2026-02-14",
        taskCategory: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend API",
        taskDate: "2026-02-13",
        taskCategory: "Development",
      },
    ],
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dashboard UI",
        taskDescription: "Build admin dashboard layout",
        taskDate: "2026-02-16",
        taskCategory: "UI",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Form Validation",
        taskDescription: "Implement validation using React Hook Form",
        taskDate: "2026-02-12",
        taskCategory: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Create employee profile page",
        taskDate: "2026-02-18",
        taskCategory: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Unit Testing",
        taskDescription: "Write test cases for login module",
        taskDate: "2026-02-11",
        taskCategory: "Testing",
      },
    ],
  },

  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Sidebar",
        taskDescription: "Develop collapsible sidebar component",
        taskDate: "2026-02-16",
        taskCategory: "UI",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress images for faster loading",
        taskDate: "2026-02-10",
        taskCategory: "Performance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark theme toggle",
        taskDate: "2026-02-19",
        taskCategory: "Feature",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "SEO Improvements",
        taskDescription: "Add meta tags and improve SEO",
        taskDate: "2026-02-09",
        taskCategory: "SEO",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Footer Section",
        taskDescription: "Design footer component",
        taskDate: "2026-02-08",
        taskCategory: "Design",
      },
    ],
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Notification System",
        taskDescription: "Create toast notifications",
        taskDate: "2026-02-17",
        taskCategory: "Feature",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logout Feature",
        taskDescription: "Implement secure logout",
        taskDate: "2026-02-13",
        taskCategory: "Security",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Search Functionality",
        taskDescription: "Add search to employee list",
        taskDate: "2026-02-18",
        taskCategory: "Feature",
      },
    ],
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Reports Page",
        taskDescription: "Create reports analytics UI",
        taskDate: "2026-02-16",
        taskCategory: "Analytics",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve layout breaking issues",
        taskDate: "2026-02-12",
        taskCategory: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy project to production",
        taskDate: "2026-02-11",
        taskCategory: "Deployment",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Accessibility",
        taskDescription: "Improve accessibility standards",
        taskDate: "2026-02-20",
        taskCategory: "Improvement",
      },
    ],
  },
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(Employees))
    localStorage.setItem("Admin",JSON.stringify(admin))
}
export const getLocalStorage=()=>{

    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('Admin'))

return{employees,admin}
    
    

}
