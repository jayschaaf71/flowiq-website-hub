import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Clock, AlertTriangle } from "lucide-react";

const ConfidenceRoutingVisualization = () => {
  const [confidence, setConfidence] = useState([85]);

  const getRoutingInfo = (score: number) => {
    if (score >= 90) {
      return {
        level: "FULL AI AUTOMATION",
        color: "bg-green-500",
        textColor: "text-green-700",
        bgColor: "bg-green-50",
        icon: Brain,
        description: "AI handles end-to-end with passive monitoring",
        actions: ["Automatic vendor dispatch", "Instant tenant responses", "Work order completion"],
        monitoring: "Passive oversight by human team"
      };
    } else if (score >= 70) {
      return {
        level: "AI WITH HUMAN OVERSIGHT", 
        color: "bg-blue-500",
        textColor: "text-blue-700",
        bgColor: "bg-blue-50",
        icon: Brain,
        description: "AI executes with active human monitoring",
        actions: ["AI makes decisions", "Human validates actions", "Real-time adjustments"],
        monitoring: "Active human oversight and intervention"
      };
    } else if (score >= 50) {
      return {
        level: "HUMAN REVIEW REQUIRED",
        color: "bg-yellow-500", 
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
        icon: Users,
        description: "Human approval needed before AI action",
        actions: ["AI analyzes situation", "Human reviews plan", "Approved execution"],
        monitoring: "Human decision-making with AI support"
      };
    } else {
      return {
        level: "IMMEDIATE HUMAN TAKEOVER",
        color: "bg-red-500",
        textColor: "text-red-700", 
        bgColor: "bg-red-50",
        icon: AlertTriangle,
        description: "Expert human handles complex situation",
        actions: ["Instant human escalation", "Expert VA takes control", "Specialized handling"],
        monitoring: "Full human control with AI data support"
      };
    }
  };

  const routingInfo = getRoutingInfo(confidence[0]);
  const Icon = routingInfo.icon;

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Interactive Confidence Routing Demo
          </CardTitle>
          <p className="text-center text-gray-600">
            Adjust the confidence score to see how SymAssist routes different scenarios
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Confidence Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">AI Confidence Score</span>
              <Badge variant="outline" className="text-lg px-3 py-1">
                {confidence[0]}%
              </Badge>
            </div>
            <Slider
              value={confidence}
              onValueChange={setConfidence}
              max={100}
              min={0}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0% - Complex</span>
              <span>50% - Moderate</span>
              <span>100% - Simple</span>
            </div>
          </div>

          {/* Routing Result */}
          <div className={`p-6 rounded-lg ${routingInfo.bgColor} border-l-4 ${routingInfo.color.replace('bg-', 'border-')}`}>
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-2 rounded-lg ${routingInfo.color} text-white`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${routingInfo.textColor}`}>
                  {routingInfo.level}
                </h3>
                <p className="text-gray-700">
                  {routingInfo.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Actions Taken:</h4>
                <ul className="space-y-1">
                  {routingInfo.actions.map((action, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Human Involvement:</h4>
                <p className="text-sm text-gray-700">{routingInfo.monitoring}</p>
              </div>
            </div>
          </div>

          {/* Example Scenarios */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">High Confidence (90%+)</h4>
                <p className="text-sm text-gray-600 mb-2">Example: "Toilet running in unit 4B"</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Clear maintenance issue</li>
                  <li>• Standard vendor available</li>
                  <li>• Routine repair procedure</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Low Confidence (&lt;50%)</h4>
                <p className="text-sm text-gray-600 mb-2">Example: "Strange smell and noise from walls"</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Unclear root cause</li>
                  <li>• Potential safety concern</li>
                  <li>• Requires expert assessment</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Response Time Indicator */}
          <div className="flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Average handoff time: &lt;2 seconds
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfidenceRoutingVisualization;