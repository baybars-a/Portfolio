import { PortfolioData } from '../types';

export const initialData: PortfolioData = {
  name: 'Baybars Al-Zibdeh',
  header: {
    name: 'Baybars Al-Zibdeh',
  },
  hero: {
    greeting: "Hello world, I'm",
    description: "Computer Science student at York University. Aspiring AI engineer with a passion for developing intelligent systems and data-driven innovations. Experienced in machine learning frameworks like scikit-learn and pandas, with certifications in ML and Generative AI, eager to contribute to cutting-edge AI projects.",
    avatarUrl: "https://cdn.discordapp.com/attachments/937438146277285939/1435803447424450731/BaybarsImageCartoon-removebg-preview.png?ex=690d4ba9&is=690bfa29&hm=0bc38c2632707a7bc57a5d76149933a3ed478a90d038b84a65e517c212aa0911&",
    resumeUrl: "https://drive.google.com/file/d/1kRLJeOQdiMwSMoiLVXgH4jev7ygtj7Vm/view?usp=sharing",
    email: "baybarsbahaa@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/baybars-alzibdeh",
      github: "https://github.com/baybars-a/",
    },
    videoUrl: undefined
  },
  projects: [
    {
      title: 'Collaborative Filtering Recommendation System',
      description: 'Implemented a collaborative filtering-based movie recommendation system using Python and Pandas, processing a dataset of 1 million+ ratings. Calculated Pearson correlation to identify top 50 similar users and recommend movies. Generated personalized recommendations with an average accuracy of 85%, prioritizing highly-rated films.',
      imageUrl: 'https://cdn.discordapp.com/attachments/937438146277285939/1436436446494986342/image.png?ex=690f9930&is=690e47b0&hm=8ea69c935d893854c2fd02c5ab1f10fa389c8dcef426466fc76045592d72f6f3&',
      tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib' ],
    },
    {
      title: 'DBSCAN Clustering',
      description: 'Mobile application for a new fintech startup.',
      imageUrl: 'https://iq.opengenus.org/content/images/2018/08/DBSCAN_search.gif',
      tags: ['Mobile App', 'Prototyping', 'User Research'],
    },
    {
      title: 'Multiple Linear Regression',
      description: 'Implemented a Multiple Linear Regression model using scikit-learn to predict CO2 emissions from car features like engine size, cylinders, and fuel consumption. Achieved a variance score of 0.86 and a Mean Squared Error (MSE) of 491.58 on the test set. The model uses Ordinary Least Squares (OLS) to estimate coefficients and intercept, providing accurate predictions for emission values.',
      imageUrl: 'https://cdn.discordapp.com/attachments/937438146277285939/1436495003366068385/image.png?ex=690fcfb9&is=690e7e39&hm=a40f50faef5ab4257c47771ee124e413695ad2e3dfbf1b052dfaf0508fec5e6a&',
      tags: ['Python', 'scikit-learn', 'Pandas','NumPy', 'Matplotlib'],
    },
    {
      title: 'Support Vector Machines',
      description: 'Implemented a Support Vector Machine (SVM) model using scikit-learn to classify cancerous tumor data. Achieved a classification accuracy of 94.6%, with a confusion matrix showing 85 true positives (Benign), 5 false positives, and 47 true positives (Malignant). The model demonstrates high precision in distinguishing between benign and malignant tumors.',
      imageUrl: 'https://cdn.discordapp.com/attachments/937438146277285939/1436480387990818937/image.png?ex=690fc21d&is=690e709d&hm=2e73cbdd08cfbd465b34cd428a64aaa832f554823d38409e64526bc25d8067ce&',
      tags: ['Python', 'scikit-learn', 'Matplotlib'],
    },
        {
      title: 'Encoder and Decoder',
      description: 'Developed a Java program to encode and decode messages using a custom substitution cipher. The program takes user input and applies a predefined encoder or decoder dictionary to transform the message. It supports both encoding and decoding operations, with an option to repeat the process.',
      imageUrl: 'https://cdn.discordapp.com/attachments/937438146277285939/1436493873575760024/Untitled_video_-_Made_with_Clipchamp_9.gif?ex=690fceac&is=690e7d2c&hm=d5cbbb01efcca2e447a8baece09a2639e2a96867de02413b0fe41c9534de10c3&',
      tags: ['Java'],
    },
{
  title: 'Probability Calculator',
  description: `Implemented a Monte Carlo simulation in Python for estimating probabilities in ball-drawing scenarios from a hat with colored balls, using random sampling without replacement. 
                yielding probabilities like 0.6078 (true: 0.6, 1.3% error). Provides accurate approximations for combinatorial events where exact computation is complex, 
                with error reducing below 1% at higher trial counts.`,
  imageUrl: 'https://a.storyblok.com/f/179899/3567x1768/79c44f4c60/monte_carlo_simulation_fair_value_padded-1.png',
  tags: ['Python', 'Tkinter', 'Statistics']
},
  ],
  about: {
    imageUrl: "https://cdn.discordapp.com/attachments/937438146277285939/1435845610887581799/1751810365872.png?ex=690d72ee&is=690c216e&hm=bd6546dad1fb3ae628822ba752cc31acd22f82b3667f382516b2750930e74b85&",
    text1: "Computer Science student at York University. Aspiring software developer with a passion for creating efficient and innovative solutions. Experienced in various programming languages and eager to contribute to impactful projects.",
    text2: "",
  },
  experience: {
    resumeUrl: "https://drive.google.com/file/d/1kRLJeOQdiMwSMoiLVXgH4jev7ygtj7Vm/view?usp=sharing",
    columns: [
      [
        { role: 'Machine Learning with Python', company: 'IBM' },
        { role: 'IBM Z Xplore', company: 'IBM' },
      ],
      [
        { role: 'Generative AI Fundamentals', company: 'Databricks' },
        { role: 'Scientific Computing with Python', company: 'FreeCodeCamp' },
      ],
      [
        { role: 'Databricks Fundamentals', company: 'Databricks' },
      ]
    ],
  },
  certifications: [
      // {
      //   name: 'Machine Learning with Python',
      //   issuer: 'IBM',
      // },
      // {
      //   name: 'IBM Z Xplore',
      //   issuer: 'IBM',
      // },
      // {
      //   name: 'Databricks Fundamentals',
      //   issuer: 'Databricks',
      // },
      // {
      //   name: 'Generative AI Fundamentals',
      //   issuer: 'Databricks',
      // },
      // {
      //   name: 'Scientific Computing with Python',
      //   issuer: 'FreeCodeCamp',
      // },
  ],
  footer: {
    title: "Get in touch",
    subtitle: "I'm currently open to new opportunities. Feel free to reach out!",
    email: "baybarsbahaa@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/baybars-alzibdeh/",
    }
  }
};