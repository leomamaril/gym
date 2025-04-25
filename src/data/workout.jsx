import image_1 from "../assets/img/workout/1.png";
import image_2 from "../assets/img/workout/2.png";
import image_3 from "../assets/img/workout/3.png";
import image_4 from "../assets/img/workout/4.png";
import image_5 from "../assets/img/workout/5.png";

import img_1 from '../assets/img/trainers/1.png';
import img_2 from '../assets/img/trainers/2.png';
import img_3 from '../assets/img/trainers/3.png';
import img_4 from '../assets/img/trainers/4.png';
import img_5 from '../assets/img/trainers/5.png';


export const WORKOUT_HEADLINE = [
  {
    image: image_1,
    classes: "WORKOUT CLASS",
    name: "HIGH INTENSITY INTERVAL TRAINING (HIIT)",
    body: "Fast-paced, calorie-burning workouts combining strength and cardio.",
  },
  {
    image: image_2,
    classes: "POWER PUMP",
    name: "STRENGTH TRAINING / BODYPUMP",
    body: "Focused weightlifting and resistance exercises to build muscle and endurance.",
  },
  {
    image: image_4,
    name: "SPIN / INDOOR CYCLING",
    classes: "SPIN BLAST",
    body: "Fast-paced, heart-pumping workout designed to challenge all fitness levels.",
  },
  {
    image: image_5,
    classes: "ZUMBA VIBE",
    name: "ZUMBA / DANCE FITNESS",
    body: "Dance-inspired cardio workout featuring Latin and international music and dance moves.",
  },
  {
    image: image_3,
    classes: "Flex & Flow Yoga",
    name: "YOGA / STRETCH AND FLOW",
    body: "Mindful yoga flow focusing on flexibility, recovery, and stress relief through gentle poses.",
  },
];

export const WORKOUT_SCHED = [
  {
    classes: "WORKOUT CLASS",
    name: "HIGH INTENSITY INTERVAL TRAINING (HIIT)",
    description:
      "Our HIIT (High-Intensity Interval Training) class is designed to help you burn calories, boost endurance, and build lean muscle in the shortest time possible.",
    image: image_1,
    about1:
      "Looking to torch calories, build strength, and boost endurance in a short amount of time? Join our High-Intensity Interval Training (HIIT) class at Gym Fit! This fast-paced, full-body workout alternates between intense bursts of activity and short recovery periods to keep your heart rate up and your body burning fat long after the session ends.",
    about2:
      "Whether you're aiming to lose weight, tone muscles, or simply challenge yourself, our HIIT sessions are designed for all fitness levels. Led by certified trainers, every class is packed with energy, motivation, and a supportive community to help you reach your goals.",
    wte: (
      <>
        <li>30–45 minutes of high-impact training</li>
        <li>Cardio + strength-focused circuits</li>
        <li>Scalable exercises for beginners and pros</li>
        <li>A powerful playlist to keep you pumped</li>
        <li>Serious results in less time</li>
      </>
    ),
    classSched:
      "Stay on top of your fitness game with our weekly High-Intensity Interval Training (HIIT) sessions at Gym Fit! Whether you're jumpstarting your workout routine or pushing past a plateau, our schedule is designed to fit your lifestyle and keep you consistent.",
    time: {
      monday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),

      wednesday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),
      friday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),
    },
    classDetail: {
      detail:
        "Fast-paced, heart-pumping workout designed to challenge all fitness levels.",
      duration: "60 MINUTES",
      intensity: "HIGH",
      fitnessLevel: "ADVANCE",
      schedule: ["MONDAY", "FRIDAY"],
      instructor: "JOAQIN REYES",
      img: img_1
    },
  },

  {
    classes: "SPIN BLAST",
    name: "SPIN / INDOOR CYCLING",
    description:
      "Push your limits in this music-fueled cycling class that blends speed, resistance, and rhythm. Perfect for torching calories while having fun.",
    image: image_4,
    about1:
      "Spin Blast is a fast-paced, high-intensity indoor cycling class that combines the power of cardio and leg-strengthening exercises. Led by an experienced instructor, you’ll work through various intervals that simulate climbing hills, speeding down flats, and sprinting through wind. This class not only improves cardiovascular health but also sculpts and strengthens the lower body, especially the legs, glutes, and core.",
    about2:
      "The atmosphere is charged with motivating music, dimmed lights, and an energetic group environment, making it an incredibly fun and effective way to work out. Whether you’re a beginner or advanced cyclist, Spin Blast offers a challenge for all levels, and the constant variation of speed and resistance ensures a well-rounded, fat-burning workout.",
    wte: (
      <>
        <li>45 minutes of fast-paced cycling intervals</li>
        <li>
          Cardio-focused training with hill climbs, sprints, and resistance work
        </li>
        <li>Stationary bikes with adjustable resistance</li>
        <li>Motivating instructor-led sessions to guide your pace</li>
        <li>High-energy tunes to keep you in the zone</li>
      </>
    ),
    classSched:
      "Stay on top of your fitness game with our weekly Spin / Indoor Cycling sessions at Gym Fit! Whether you're jumpstarting your workout routine or pushing past a plateau, our schedule is designed to fit your lifestyle and keep you consistent.",
    time: {
      monday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),

      wednesday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),
      friday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),
    },
    classDetail: {
      detail:
        "Fast-paced, heart-pumping workout designed to challenge all fitness levels.",
      duration: "60 MINUTES",
      intensity: "HIGH",
      fitnessLevel: "ADVANCE",
      schedule: ["MONDAY", "FRIDAY"],
      instructor: "JAMES CRUZ",
      img: img_5
    },
  },
  {
    classes: "POWER PUMP",
    name: "STRENGTH TRAINING / BODYPUMP",
    description:
      "Sculpt and tone your entire body using light weights, high reps, and full-body movement. Great for all fitness levels.",
    image: image_2,
    about1:
      "Power Pump is an effective strength training class focused on using light to moderate weights combined with high-repetition sets. The class is structured to target all major muscle groups, incorporating a variety of exercises like squats, lunges, presses, and curls. It’s perfect for anyone looking to improve muscle tone, endurance, and overall strength without heavy lifting.",
    about2:
      "In Power Pump, you'll also work on your endurance as you perform exercises in a continuous flow. The upbeat music and motivating instructor will push you through each set, helping you achieve maximum results while ensuring proper form. Whether you're just getting started with weight training or you're a seasoned lifter, Power Pump will help you build muscle, burn fat, and increase overall strength.",
    wte: (
      <>
        <li>45–60 minutes of full-body strength training</li>
        <li>
          Light weights and high-repetition sets to build endurance and tone
          muscles
        </li>
        <li>A variety of exercises targeting all major muscle groups</li>
        <li>Upbeat music to keep the energy high and the workout flowing</li>
        <li>Guidance on proper form and technique</li>
      </>
    ),
    classSched:
      "Stay on top of your fitness game with our weekly Strength Training sessions at Gym Fit! Whether you're jumpstarting your workout routine or pushing past a plateau, our schedule is designed to fit your lifestyle and keep you consistent.",
    time: {
      monday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),

      wednesday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),
      friday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),
    },
    classDetail: {
      detail:
        "Full-body strength training using light weights and high repetitions to tone muscles.",
      duration: "45–60 minutes",
      intensity: "HIGH",
      fitnessLevel: "ADVANCE",
      schedule: ["MONDAY", "FRIDAY"],
      instructor: "MIGUEL SANTOS",
      img: img_3
    },
  },
  {
    classes: "ZUMBA VIBE",
    name: "ZUMBA / DANCE FITNESS",
    description:
      "Dance your way to fitness with high-energy routines set to Latin and global hits. No dance skills needed — just follow the beat!",
    image: image_5,
    about1:
      "Zumba Vibe is a cardio dance class that combines Latin, hip-hop, and international rhythms into a full-body workout. This class makes fitness feel like a party, with energizing beats and easy-to-follow routines that get your heart pumping and muscles moving. You don’t need to be a dancer to join — just follow the instructor’s lead and enjoy the music while burning calories.",
    about2:
      "Each class blends different styles of dance, including salsa, reggaeton, and cumbia, all aimed at improving your cardio endurance and coordination. Zumba Vibe is perfect for those who want to get fit in a fun, energetic way without feeling like you're working out. Whether you're a beginner or experienced, you'll find yourself dancing, sweating, and smiling through the entire session!",
    wte: (
      <>
        <li>45 minutes of dance-focused cardio</li>
        <li>High-energy routines set to salsa, reggaeton, and hip-hop beats</li>
        <li>Easy-to-follow choreography, no dance experience required</li>
        <li>A fun, party-like atmosphere that makes fitness feel enjoyable</li>
        <li>Calorie-burning, full-body workout disguised as a dance party</li>
      </>
    ),
    classSched:
      "Stay on top of your fitness game with our weekly Zumba Dance sessions at Gym Fit! Whether you're jumpstarting your workout routine or pushing past a plateau, our schedule is designed to fit your lifestyle and keep you consistent.",
    time: {
      monday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),

      wednesday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),
      friday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),
    },
    classDetail: {
      detail:
        "Dance-inspired cardio workout featuring Latin and international music and dance moves.",
      duration: "60 MINUTES",
      intensity: "HIGH",
      fitnessLevel: "ADVANCE",
      schedule: ["MONDAY", "FRIDAY"],
      instructor: "ISABEL DELA CRUZ",
      img: img_2
    },
  },
  {
    classes: "Flex & Flow Yoga",
    name: "YOGA / STRETCH AND FLOW",
    description:
      "Slow down and reconnect with your body through mindful movement and breath. Great for flexibility, recovery, and stress relief.",
    image: image_3,
    about1:
      "Flex & Flow Yoga is a calming and restorative class designed to improve flexibility, strength, and mental clarity. Through a series of flowing poses and stretches, you’ll work on deepening your flexibility while also strengthening your core and joints. The emphasis on controlled breathing helps to reduce stress and increase mental focus, making this a perfect practice for unwinding and promoting overall wellness.",
    about2:
      "Expect a serene and welcoming environment where you can move at your own pace, whether you're a beginner or an experienced practitioner. Flex & Flow Yoga is ideal for improving balance, releasing tension, and recovering from intense workouts or daily life stress. Whether you're looking for a mental reset or a way to improve mobility, this class offers a balanced approach to both physical and emotional well-being.",
    wte: (
      <>
        <li>60 minutes of slow-paced yoga and stretching</li>
        <li>A series of calming poses to improve flexibility and mobility</li>
        <li>Emphasis on deep breathing and mindfulness</li>
        <li>Focus on recovery, balance, and overall well-being</li>
        <li>A peaceful environment with soothing music and a relaxed vibe</li>
      </>
    ),
    classSched:
      "Stay on top of your fitness game with our weekly Yoga sessions at Gym Fit! Whether you're jumpstarting your workout routine or pushing past a plateau, our schedule is designed to fit your lifestyle and keep you consistent.",
    time: {
      monday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),

      wednesday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),
      friday: (
        <>
          <li>8:00 AM - 9:00 AM</li>
          <li>10:00 AM - 11:00 AM</li>
          <li>2:00 PM - 3:00 PM</li>
        </>
      ),
    },
    classDetail: {
      detail:
        "Mindful yoga flow focusing on flexibility, recovery, and stress relief through gentle poses.",
      duration: "60 MINUTES",
      intensity: "MODERATE",
      fitnessLevel: "BEGINNER",
      schedule: ["MONDAY", "FRIDAY"],
      instructor: "JANE REYES",
      img: img_4
    },
  },
];
