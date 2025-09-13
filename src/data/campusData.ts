import { CampusData, CampusInfo, QuickAction } from '../types/campus';

export const quickActions: QuickAction[] = [
  {
    id: '1',
    title: 'Class Schedule',
    description: 'View today\'s classes and upcoming lectures',
    category: 'schedule',
    icon: '📚'
  },
  {
    id: '2',
    title: 'Library Hours',
    description: 'Check library opening hours and services',
    category: 'library',
    icon: '📖'
  },
  {
    id: '3',
    title: 'Dining Menu',
    description: 'Today\'s cafeteria menu and dining locations',
    category: 'dining',
    icon: '🍽️'
  },
  {
    id: '4',
    title: 'Campus Map',
    description: 'Find buildings, labs, and facilities',
    category: 'facilities',
    icon: '🗺️'
  },
  {
    id: '5',
    title: 'Registration Help',
    description: 'Course registration and enrollment info',
    category: 'admin',
    icon: '📝'
  },
  {
    id: '6',
    title: 'Student Services',
    description: 'Financial aid, housing, and support services',
    category: 'admin',
    icon: '🎓'
  }
];

export const campusData: CampusData = {
  schedules: [
    {
      id: 'sch_1',
      title: 'Class Schedules',
      content: `**Today's Schedule:**
      
📚 **Computer Science 101** - 9:00 AM - Room A205
📊 **Data Structures** - 11:00 AM - Lab B102  
🧮 **Calculus II** - 2:00 PM - Room C301
🔬 **Physics Lab** - 4:00 PM - Science Building S105

**Upcoming This Week:**
• Thursday: Software Engineering Project Presentation
• Friday: Mathematics Quiz - Room C301
• Weekend: No scheduled classes`,
      category: 'schedule',
      tags: ['classes', 'timetable', 'lectures', 'schedule']
    },
    {
      id: 'sch_2',
      title: 'Exam Schedule',
      content: `**Upcoming Exams:**

📝 **Midterm Exams (Week of March 15):**
• Computer Science 101 - March 16, 9:00 AM
• Data Structures - March 17, 2:00 PM
• Calculus II - March 18, 10:00 AM
• Physics - March 19, 1:00 PM

📚 **Final Exams (Week of May 1):**
Details will be posted 4 weeks before exam period.

**Exam Guidelines:**
• Arrive 15 minutes early
• Bring student ID and required materials
• No electronic devices unless specified`,
      category: 'schedule',
      tags: ['exams', 'tests', 'midterms', 'finals']
    }
  ],
  facilities: [
    {
      id: 'fac_1',
      title: 'Academic Buildings',
      content: `**Main Academic Buildings:**

🏛️ **Central Library** - Building A
• 4 floors, study rooms, computer labs
• Hours: 7 AM - 11 PM (Mon-Fri), 9 AM - 9 PM (Weekends)

🔬 **Science Complex** - Building B
• Physics, Chemistry, Biology labs
• Research facilities and faculty offices

💻 **Engineering Building** - Building C  
• Computer labs, maker space, 3D printing
• Student lounge and group study areas

🎨 **Arts & Humanities** - Building D
• Lecture halls, art studios, language labs
• Performance spaces and exhibition areas

🏥 **Student Health Center** - Building E
• Medical services, counseling, wellness programs`,
      category: 'facilities',
      tags: ['buildings', 'labs', 'classrooms', 'location', 'map']
    },
    {
      id: 'fac_2',
      title: 'Recreation & Sports',
      content: `**Recreation Facilities:**

🏋️ **Fitness Center**
• Weight room, cardio equipment, group classes
• Hours: 6 AM - 10 PM daily
• Student ID required for access

🏊 **Aquatic Center**
• Olympic-size pool, diving boards
• Lap swimming: 6 AM - 8 AM, 7 PM - 9 PM
• Open recreation: 12 PM - 6 PM

⚽ **Sports Complex**
• Basketball courts, tennis courts, soccer field
• Track and field facilities
• Equipment rental available

🎯 **Game Room**
• Pool tables, ping pong, video games
• Located in Student Union Building`,
      category: 'facilities',
      tags: ['sports', 'gym', 'fitness', 'recreation', 'pool']
    }
  ],
  dining: [
    {
      id: 'din_1',
      title: 'Campus Dining',
      content: `**Main Cafeteria - Today's Menu:**

🍳 **Breakfast (7-10 AM):**
• Scrambled eggs, bacon, fresh fruit
• Pancakes, oatmeal, yogurt parfait
• Coffee, tea, fresh juices

🥗 **Lunch (11:30 AM - 2:30 PM):**
• Grilled chicken Caesar salad
• Beef stir-fry with rice
• Vegetarian pasta primavera
• Pizza station, sandwich bar

🍽️ **Dinner (5-8 PM):**
• BBQ pulled pork, coleslaw, cornbread
• Salmon with roasted vegetables
• Vegan curry with quinoa
• Salad bar, dessert station`,
      category: 'dining',
      tags: ['food', 'menu', 'cafeteria', 'meals', 'dining']
    },
    {
      id: 'din_2',
      title: 'Dining Locations & Hours',
      content: `**Campus Dining Options:**

🍕 **Student Union Food Court**
• Pizza, burgers, Asian cuisine, coffee shop
• Hours: 7 AM - 9 PM (Mon-Fri), 10 AM - 7 PM (Weekends)

☕ **Library Café**
• Coffee, pastries, light snacks
• Hours: 8 AM - 8 PM daily

🥪 **Grab & Go Market**
• Sandwiches, salads, snacks, beverages
• 24/7 access with student ID

🍔 **Late Night Grill**
• Burgers, fries, comfort food
• Hours: 8 PM - 2 AM (Sun-Thu)

**Meal Plans Available:**
• Unlimited dining plan
• Block meal plans (10, 14, 19 meals/week)
• Commuter meal plans`,
      category: 'dining',
      tags: ['hours', 'locations', 'meal plans', 'food court']
    }
  ],
  library: [
    {
      id: 'lib_1',
      title: 'Library Services',
      content: `**Central Library Services:**

📚 **Collections & Resources:**
• 500,000+ books, journals, digital resources
• Research databases, e-books, streaming media
• Special collections, archives

💻 **Technology Services:**
• 100+ computers, laptops for checkout
• Printing, scanning, 3D printing
• Video conferencing rooms

👥 **Study Spaces:**
• Quiet study floors (2nd & 3rd)
• Group study rooms (bookable online)
• Collaborative learning spaces
• 24/7 study area (basement level)

🎓 **Academic Support:**
• Research assistance from librarians
• Citation help, writing support
• Course reserves, interlibrary loans`,
      category: 'library',
      tags: ['books', 'research', 'study', 'computers', 'services']
    },
    {
      id: 'lib_2',
      title: 'Library Hours & Policies',
      content: `**Operating Hours:**

📅 **Regular Semester:**
• Monday - Thursday: 7:00 AM - 2:00 AM
• Friday: 7:00 AM - 8:00 PM  
• Saturday: 9:00 AM - 8:00 PM
• Sunday: 10:00 AM - 2:00 AM

📅 **Exam Period:**
• Extended 24/5 hours (Mon-Fri)
• Weekend hours extended

**Policies:**
• Student ID required for entry after 8 PM
• Food allowed in designated areas only
• Cell phone use in lobby area only
• Maximum 3-hour limit on group study rooms

**Book Borrowing:**
• Students: 20 books, 4-week loan period
• Faculty/Staff: 50 books, semester-long loans
• Renewals available online`,
      category: 'library',
      tags: ['hours', 'policies', 'borrowing', 'rules']
    }
  ],
  admin: [
    {
      id: 'adm_1',
      title: 'Registration & Enrollment',
      content: `**Course Registration:**

📝 **Registration Periods:**
• Priority Registration: March 20-27 (by class level)
• Open Registration: March 28 - August 15
• Late Registration: First week of semester (with fee)

🎯 **How to Register:**
1. Meet with academic advisor
2. Remove any holds on account
3. Log into student portal
4. Search and select courses
5. Verify schedule and payment

📋 **Important Deadlines:**
• Add/Drop Period: First two weeks of semester
• Withdrawal Deadline: Week 10 of semester
• Grade Replacement: Must be done before graduation

**Prerequisites:**
• Check course catalog for requirements
• Contact department for override requests
• Some courses require instructor permission`,
      category: 'admin',
      tags: ['registration', 'enrollment', 'courses', 'deadlines']
    },
    {
      id: 'adm_2',
      title: 'Financial Services',
      content: `**Tuition & Financial Aid:**

💰 **Payment Options:**
• Full semester payment (5% discount)
• Monthly payment plan available
• Financial aid, scholarships, work-study

📅 **Important Dates:**
• FAFSA Deadline: March 1st
• Scholarship Applications: February 15th
• Payment Due: First Friday of semester

🎓 **Financial Aid Services:**
• Need-based grants and loans
• Merit scholarships
• Work-study programs
• Emergency financial assistance

**Student Account Services:**
• Online payment portal
• Payment plan enrollment
• Refund processing
• 1098-T tax forms

**Contact Information:**
• Financial Aid Office: Student Services Building
• Hours: 8 AM - 5 PM (Mon-Fri)
• Phone: (555) 123-4567`,
      category: 'admin',
      tags: ['tuition', 'financial aid', 'payment', 'scholarships']
    },
    {
      id: 'adm_3',
      title: 'Student Support Services',
      content: `**Academic & Personal Support:**

🎓 **Academic Success Center:**
• Tutoring services (free for students)
• Study skills workshops
• Time management counseling
• Learning disability support

🏠 **Housing Services:**
• Residence hall assignments
• Roommate matching
• Housing applications
• Maintenance requests

💙 **Student Counseling:**
• Individual and group counseling
• Crisis intervention (24/7)
• Workshops on stress, anxiety, relationships
• Confidential services

🌟 **Career Services:**
• Career counseling and planning
• Resume and interview help
• Job search assistance
• Internship opportunities

**Emergency Contacts:**
• Campus Safety: (555) 911-0000
• Counseling Crisis Line: (555) 988-7890
• Health Services: (555) 123-4580`,
      category: 'admin',
      tags: ['support', 'counseling', 'housing', 'career', 'emergency']
    }
  ]
};

// AI Response patterns for natural conversation
export const responsePatterns = {
  greeting: [
    "Hello! I'm your Campus Assistant. How can I help you today?",
    "Hi there! I'm here to help with any campus questions you have.",
    "Welcome! I can assist you with schedules, facilities, dining, library services, and more!"
  ],
  notFound: [
    "I'm not sure about that specific question, but I can help you with campus schedules, facilities, dining, library services, or administrative procedures. What would you like to know?",
    "I don't have information on that topic, but I'm great at helping with campus-related questions! Try asking about classes, dining, or facilities.",
    "That's outside my knowledge area. I specialize in campus information - schedules, facilities, dining, library, and admin services. What can I help you with?"
  ]
};