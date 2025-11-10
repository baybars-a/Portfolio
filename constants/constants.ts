import { PortfolioData } from '../types';

export const initialData: PortfolioData = {
  name: 'Baybars Al-Zibdeh',
  header: {
    name: 'Baybars Al-Zibdeh',
  },
  hero: {
    greeting: "Hello world, I'm",
    description: "Computer Science student at York University. Aspiring AI engineer with a passion for developing intelligent systems and data-driven innovations. Experienced in machine learning frameworks like scikit-learn and pandas, with certifications in ML and Generative AI, eager to contribute to cutting-edge AI projects.",
    avatarUrl: "./BaybarsImageCartoon.png",
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
      imageUrl: './collaborative.png',
      tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib' ],
    },
    {
      title: 'DBSCAN Clustering',
      description: 'Mobile application for a new fintech startup.',
      imageUrl: './DBSCAN_search.gif',
      tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib' ],
    },
    {
      title: 'Multiple Linear Regression',
      description: 'Implemented a Multiple Linear Regression model using scikit-learn to predict CO2 emissions from car features like engine size, cylinders, and fuel consumption. Achieved a variance score of 0.86 and a Mean Squared Error (MSE) of 491.58 on the test set. The model uses Ordinary Least Squares (OLS) to estimate coefficients and intercept, providing accurate predictions for emission values.',
      imageUrl: './regression.png',
      tags: ['Python', 'scikit-learn', 'Pandas','NumPy', 'Matplotlib'],
    },
    {
      title: 'Support Vector Machines',
      description: 'Implemented a Support Vector Machine (SVM) model using scikit-learn to classify cancerous tumor data. Achieved a classification accuracy of 94.6%, with a confusion matrix showing 85 true positives (Benign), 5 false positives, and 47 true positives (Malignant). The model demonstrates high precision in distinguishing between benign and malignant tumors.',
      imageUrl: './predicted.png',
      tags: ['Python', 'scikit-learn', 'Matplotlib'],
    },
        {
      title: 'Encoder and Decoder',
      description: 'Developed a Java program to encode and decode messages using a custom substitution cipher. The program takes user input and applies a predefined encoder or decoder dictionary to transform the message. It supports both encoding and decoding operations, with an option to repeat the process.',
      imageUrl: './decode.gif',
      tags: ['Java'],
    },
{
  title: 'Probability Calculator',
  description: `Implemented a Monte Carlo simulation in Python for estimating probabilities in ball-drawing scenarios from a hat with colored balls, using random sampling without replacement. 
                yielding probabilities like 0.6078 (true: 0.6, 1.3% error). Provides accurate approximations for combinatorial events where exact computation is complex, 
                with error reducing below 1% at higher trial counts.`,
  imageUrl: './probability.png',
  tags: ['Python', 'Tkinter', 'Statistics']
},
  ],
  about: {
    imageUrl: "./baybars.JPG",
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