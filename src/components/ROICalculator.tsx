import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, Clock, Users, Brain } from "lucide-react";

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    numberOfUnits: 50,
    maintenanceRequestsPerMonth: 25,
    costPerMaintenanceCoordination: 45,
    propertyManagerHourlyRate: 25,
    currentTenantSatisfactionScore: 75,
    averageResponseTimeHours: 6,
    vendorManagementHours: 10,
    emergencyCallsPerMonth: 8
  });

  const [results, setResults] = useState({
    currentCosts: 0,
    potentialSavings: 0,
    additionalRevenue: 0,
    totalBenefit: 0,
    roiPercentage: 0,
    paybackMonths: 0
  });

  const symAssistMonthlyCost = inputs.numberOfUnits * 199; // $199 per unit per month

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    // Current monthly property management costs
    const currentMaintenanceCoordinationCost = inputs.maintenanceRequestsPerMonth * inputs.costPerMaintenanceCoordination;
    const vendorManagementCost = inputs.vendorManagementHours * inputs.propertyManagerHourlyRate;
    const emergencyHandlingCost = inputs.emergencyCallsPerMonth * inputs.propertyManagerHourlyRate * 2; // 2 hours per emergency
    const totalCurrentCosts = currentMaintenanceCoordinationCost + vendorManagementCost + emergencyHandlingCost;
    
    // Savings calculations with SymAssist automation
    const maintenanceCoordinationSavings = currentMaintenanceCoordinationCost * 0.75; // 75% reduction
    const vendorManagementSavings = vendorManagementCost * 0.60; // 60% reduction  
    const emergencyHandlingSavings = emergencyHandlingCost * 0.45; // 45% faster response
    const totalMonthlySavings = maintenanceCoordinationSavings + vendorManagementSavings + emergencyHandlingSavings;
    
    // Improved tenant satisfaction and retention benefits
    const satisfactionImprovement = (100 - inputs.currentTenantSatisfactionScore) * 0.5; // 50% improvement in gap
    const tenantRetentionValue = inputs.numberOfUnits * 50 * (satisfactionImprovement / 100); // $50 per unit value
    
    // Total monthly benefit
    const totalMonthlyBenefit = totalMonthlySavings + tenantRetentionValue;
    const netBenefit = totalMonthlyBenefit - symAssistMonthlyCost;
    const roiPercentage = (netBenefit / symAssistMonthlyCost) * 100;
    const paybackMonths = symAssistMonthlyCost / totalMonthlyBenefit;

    setResults({
      currentCosts: totalCurrentCosts,
      potentialSavings: totalMonthlySavings,
      additionalRevenue: tenantRetentionValue,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          SymAssist ROI Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your potential return on investment with SymAssist's AI automation. 
          Adjust the parameters below to see how much your property management could save.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
                <Label htmlFor="numberOfUnits">Number of Properties/Units</Label>
                <Input
                  id="numberOfUnits"
                  type="number"
                  value={inputs.numberOfUnits}
                  onChange={(e) => handleInputChange('numberOfUnits', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="maintenanceRequestsPerMonth">Average Maintenance Requests per Month</Label>
                <Input
                  id="maintenanceRequestsPerMonth"
                  type="number"
                  value={inputs.maintenanceRequestsPerMonth}
                  onChange={(e) => handleInputChange('maintenanceRequestsPerMonth', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="costPerMaintenanceCoordination">Current Cost per Maintenance Coordination ($)</Label>
                <Input
                  id="costPerMaintenanceCoordination"
                  type="number"
                  value={inputs.costPerMaintenanceCoordination}
                  onChange={(e) => handleInputChange('costPerMaintenanceCoordination', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="propertyManagerHourlyRate">Average Property Manager Hourly Rate ($)</Label>
                <Input
                  id="propertyManagerHourlyRate"
                  type="number"
                  value={inputs.propertyManagerHourlyRate}
                  onChange={(e) => handleInputChange('propertyManagerHourlyRate', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="currentTenantSatisfactionScore">Current Tenant Satisfaction Score (%)</Label>
                <Input
                  id="currentTenantSatisfactionScore"
                  type="number"
                  value={inputs.currentTenantSatisfactionScore}
                  onChange={(e) => handleInputChange('currentTenantSatisfactionScore', parseInt(e.target.value) || 0)}
                  className="mt-1"
                  max="100"
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
                <Label>Average Response Time (hours): {inputs.averageResponseTimeHours}</Label>
                <Slider
                  value={[inputs.averageResponseTimeHours]}
                  onValueChange={(value) => handleInputChange('averageResponseTimeHours', value[0])}
                  max={24}
                  step={1}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Vendor Management Hours per Month: {inputs.vendorManagementHours}</Label>
                <Slider
                  value={[inputs.vendorManagementHours]}
                  onValueChange={(value) => handleInputChange('vendorManagementHours', value[0])}
                  max={40}
                  step={2}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Emergency Calls per Month: {inputs.emergencyCallsPerMonth}</Label>
                <Slider
                  value={[inputs.emergencyCallsPerMonth]}
                  onValueChange={(value) => handleInputChange('emergencyCallsPerMonth', value[0])}
                  max={20}
                  step={1}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">
                    {Math.round(results.roiPercentage)}%
                  </div>
                  <div className="text-sm text-gray-600">Monthly ROI</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {Math.round(results.paybackMonths)}
                  </div>
                  <div className="text-sm text-gray-600">Months to Payback</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-700">Current Monthly Costs</span>
                  <span className="font-semibold">{formatCurrency(results.currentCosts)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Operational Savings</span>
                  <span className="font-semibold text-green-600">+{formatCurrency(results.potentialSavings)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">Tenant Retention Value</span>
                  <span className="font-semibold text-blue-600">+{formatCurrency(results.additionalRevenue)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">SymAssist Monthly Cost</span>
                  <span className="font-semibold text-orange-600">-{formatCurrency(symAssistMonthlyCost)}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg">
                  <span className="font-semibold">Net Monthly Benefit</span>
                  <span className="text-xl font-bold">{formatCurrency(results.totalBenefit - symAssistMonthlyCost)}</span>
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
                  <span className="font-bold text-green-600">{formatCurrency((results.totalBenefit - symAssistMonthlyCost) * 12)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Saved Per Year:</span>
                  <span className="font-bold text-blue-600">
                    {Math.round((results.potentialSavings / inputs.propertyManagerHourlyRate) * 12)} hours
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Maintenance Requests Automated:</span>
                  <span className="font-bold text-purple-600">
                    {Math.round(inputs.maintenanceRequestsPerMonth * 0.85 * 12)}
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
              Book AI Readiness Assessment
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              Get a personalized analysis of your property's automation potential
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
