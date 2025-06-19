
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, Clock, Users, Brain } from "lucide-react";

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    frontDeskStaff: 2,
    hourlyWage: 18,
    hoursPerWeek: 40,
    appointmentsPerWeek: 150,
    noShowRate: 20,
    averageAppointmentValue: 200,
    timeSpentOnScheduling: 30,
    timeSpentOnInsurance: 25,
    timeSpentOnFollowUp: 15,
    claimsProcessingTime: 45
  });

  const [results, setResults] = useState({
    currentCosts: 0,
    potentialSavings: 0,
    additionalRevenue: 0,
    totalBenefit: 0,
    roiPercentage: 0,
    paybackMonths: 0
  });

  const flowIQMonthlyCost = 500; // Estimated monthly cost

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    // Current monthly staff costs
    const monthlyStaffCost = inputs.frontDeskStaff * inputs.hourlyWage * inputs.hoursPerWeek * 4.33;
    
    // Time savings calculations (in hours per week)
    const schedulingTimeSaved = (inputs.timeSpentOnScheduling / 100) * inputs.hoursPerWeek * inputs.frontDeskStaff * 0.7; // 70% reduction
    const insuranceTimeSaved = (inputs.timeSpentOnInsurance / 100) * inputs.hoursPerWeek * inputs.frontDeskStaff * 0.8; // 80% reduction
    const followUpTimeSaved = (inputs.timeSpentOnFollowUp / 100) * inputs.hoursPerWeek * inputs.frontDeskStaff * 0.6; // 60% reduction
    const claimsTimeSaved = (inputs.claimsProcessingTime / 100) * inputs.hoursPerWeek * inputs.frontDeskStaff * 0.5; // 50% reduction
    
    const totalTimeSavedPerWeek = schedulingTimeSaved + insuranceTimeSaved + followUpTimeSaved + claimsTimeSaved;
    const monthlyCostSavings = totalTimeSavedPerWeek * 4.33 * inputs.hourlyWage;
    
    // Revenue improvements
    const noShowReduction = inputs.noShowRate * 0.5; // 50% reduction in no-shows
    const additionalAppointments = (inputs.appointmentsPerWeek * (noShowReduction / 100)) * 4.33;
    const monthlyAdditionalRevenue = additionalAppointments * inputs.averageAppointmentValue;
    
    // Total monthly benefit
    const totalMonthlyBenefit = monthlyCostSavings + monthlyAdditionalRevenue;
    const netBenefit = totalMonthlyBenefit - flowIQMonthlyCost;
    const roiPercentage = (netBenefit / flowIQMonthlyCost) * 100;
    const paybackMonths = flowIQMonthlyCost / totalMonthlyBenefit;

    setResults({
      currentCosts: monthlyStaffCost,
      potentialSavings: monthlyCostSavings,
      additionalRevenue: monthlyAdditionalRevenue,
      totalBenefit: totalMonthlyBenefit,
      roiPercentage: roiPercentage,
      paybackMonths: paybackMonths
    });
  };

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          FlowIQ ROI Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your potential return on investment with FlowIQ's AI automation. 
          Adjust the parameters below to see how much your practice could save.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-600" />
                Practice Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="frontDeskStaff">Number of Front Desk Staff</Label>
                <Input
                  id="frontDeskStaff"
                  type="number"
                  value={inputs.frontDeskStaff}
                  onChange={(e) => handleInputChange('frontDeskStaff', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="hourlyWage">Average Hourly Wage ($)</Label>
                <Input
                  id="hourlyWage"
                  type="number"
                  value={inputs.hourlyWage}
                  onChange={(e) => handleInputChange('hourlyWage', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="hoursPerWeek">Hours Per Week (per staff member)</Label>
                <Input
                  id="hoursPerWeek"
                  type="number"
                  value={inputs.hoursPerWeek}
                  onChange={(e) => handleInputChange('hoursPerWeek', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="appointmentsPerWeek">Appointments Per Week</Label>
                <Input
                  id="appointmentsPerWeek"
                  type="number"
                  value={inputs.appointmentsPerWeek}
                  onChange={(e) => handleInputChange('appointmentsPerWeek', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="averageAppointmentValue">Average Appointment Value ($)</Label>
                <Input
                  id="averageAppointmentValue"
                  type="number"
                  value={inputs.averageAppointmentValue}
                  onChange={(e) => handleInputChange('averageAppointmentValue', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-600" />
                Time Allocation (% of work time)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Scheduling & Appointment Management: {inputs.timeSpentOnScheduling}%</Label>
                <Slider
                  value={[inputs.timeSpentOnScheduling]}
                  onValueChange={(value) => handleInputChange('timeSpentOnScheduling', value[0])}
                  max={50}
                  step={5}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Insurance Verification: {inputs.timeSpentOnInsurance}%</Label>
                <Slider
                  value={[inputs.timeSpentOnInsurance]}
                  onValueChange={(value) => handleInputChange('timeSpentOnInsurance', value[0])}
                  max={50}
                  step={5}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Patient Follow-up: {inputs.timeSpentOnFollowUp}%</Label>
                <Slider
                  value={[inputs.timeSpentOnFollowUp]}
                  onValueChange={(value) => handleInputChange('timeSpentOnFollowUp', value[0])}
                  max={50}
                  step={5}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Claims Processing: {inputs.claimsProcessingTime}%</Label>
                <Slider
                  value={[inputs.claimsProcessingTime]}
                  onValueChange={(value) => handleInputChange('claimsProcessingTime', value[0])}
                  max={50}
                  step={5}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Current No-Show Rate: {inputs.noShowRate}%</Label>
                <Slider
                  value={[inputs.noShowRate]}
                  onValueChange={(value) => handleInputChange('noShowRate', value[0])}
                  max={40}
                  step={5}
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Calculator className="mr-2 h-5 w-5" />
                ROI Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600">
                    {Math.round(results.roiPercentage)}%
                  </div>
                  <div className="text-sm text-gray-600">Monthly ROI</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600">
                    {Math.round(results.paybackMonths)}
                  </div>
                  <div className="text-sm text-gray-600">Months to Payback</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-700">Monthly Staff Costs</span>
                  <span className="font-semibold">{formatCurrency(results.currentCosts)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Cost Savings</span>
                  <span className="font-semibold text-green-600">+{formatCurrency(results.potentialSavings)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">Additional Revenue</span>
                  <span className="font-semibold text-blue-600">+{formatCurrency(results.additionalRevenue)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">FlowIQ Monthly Cost</span>
                  <span className="font-semibold text-orange-600">-{formatCurrency(flowIQMonthlyCost)}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg">
                  <span className="font-semibold">Net Monthly Benefit</span>
                  <span className="text-xl font-bold">{formatCurrency(results.totalBenefit - flowIQMonthlyCost)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
                Projected Annual Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Annual Savings:</span>
                  <span className="font-bold text-green-600">{formatCurrency((results.totalBenefit - flowIQMonthlyCost) * 12)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Saved Per Year:</span>
                  <span className="font-bold text-blue-600">
                    {Math.round((results.potentialSavings / inputs.hourlyWage) * 12)} hours
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Additional Appointments:</span>
                  <span className="font-bold text-purple-600">
                    {Math.round((results.additionalRevenue / inputs.averageAppointmentValue) * 12)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 text-lg font-semibold"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              <Brain className="mr-2 h-5 w-5" />
              Book Free AI Assessment
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              Get a personalized analysis of your practice's automation potential
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
