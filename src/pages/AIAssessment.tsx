import React from 'react';
import { Helmet } from 'react-helmet-async';
import AIAssessmentForm from '@/components/AIAssessmentForm';

const AIAssessment = () => {
  return (
    <>
      <Helmet>
        <title>AI Readiness Assessment - SymAssist</title>
        <meta 
          name="description" 
          content="Get a comprehensive AI readiness assessment for your healthcare practice. Custom recommendations, implementation roadmap, and expert consultation included." 
        />
        <meta name="keywords" content="AI assessment, healthcare AI, practice automation, AI readiness, dental AI, medical AI" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto py-12">
          <AIAssessmentForm />
        </div>
      </div>
    </>
  );
};

export default AIAssessment;