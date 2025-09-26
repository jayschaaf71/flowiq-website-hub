import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, Clock, Users, Brain } from "lucide-react";

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    dailyCustomerInteractions: 50,
    customerInquiriesPerMonth: 100,
    currentReceptionHourlyRate: 25,
    customerServiceCostPerInteraction: 15,
    currentCustomerSatisfactionScore: 75,
    averageResponseTimeHours: 6,
    serviceCoordinationHours: 10,
    afterHoursCallsPerMonth: 8
  });

  const [results, setResults] = useState({
    currentCosts: 0,
    potentialSavings: 0,
    additionalRevenue: 0,
    totalBenefit: 0,
    roiPercentage: 0,
    paybackMonths: 0
  });

  const symAssistMonthlyCost = Math.max(inputs.dailyCustomerInteractions * 2.99, 299); // $2.99 per daily interaction, minimum $299

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    // Current monthly customer service costs
    const currentCustomerServiceCost = inputs.customerInquiriesPerMonth * inputs.customerServiceCostPerInteraction;
    const serviceCoordinationCost = inputs.serviceCoordinationHours * inputs.currentReceptionHourlyRate;
    const afterHoursHandlingCost = inputs.afterHoursCallsPerMonth * inputs.currentReceptionHourlyRate * 2; // 2 hours per after-hours call
    const totalCurrentCosts = currentCustomerServiceCost + serviceCoordinationCost + afterHoursHandlingCost;
    
    // Savings calculations with SymAssist automation (realistic benefits)
    const customerServiceSavings = currentCustomerServiceCost * 0.85; // 85% reduction
    const serviceCoordinationSavings = serviceCoordinationCost * 0.75; // 75% reduction  
    const afterHoursHandlingSavings = afterHoursHandlingCost * 0.60; // 60% faster response
    const totalMonthlySavings = customerServiceSavings + serviceCoordinationSavings + afterHoursHandlingSavings;
    
    // Additional revenue from improved operations
    const satisfactionImprovement = (100 - inputs.currentCustomerSatisfactionScore) * 0.6; // 60% improvement in gap
    const customerRetentionValue = inputs.dailyCustomerInteractions * 50 * (satisfactionImprovement / 100); // $50 per interaction value
    const reducedOperationalCost = inputs.dailyCustomerInteractions * 25; // $25 per interaction from efficiency
    const additionalRevenue = customerRetentionValue + reducedOperationalCost;
    
    // Total monthly benefit
    const totalMonthlyBenefit = totalMonthlySavings + additionalRevenue;
    const netBenefit = totalMonthlyBenefit - symAssistMonthlyCost;
    const roiPercentage = symAssistMonthlyCost > 0 ? (netBenefit / symAssistMonthlyCost) * 100 : 0;
    const paybackMonths = netBenefit > 0 ? Math.max(symAssistMonthlyCost / totalMonthlyBenefit, 0.5) : 999;

    setResults({
      currentCosts: totalCurrentCosts,
      potentialSavings: totalMonthlySavings,
      additionalRevenue: additionalRevenue,
      totalBenefit: totalMonthlyBenefit,
      roiPercentage: Math.round(Math.max(roiPercentage, 0)), // Ensure positive ROI display
      paybackMonths: Math.min(paybackMonths, 24) // Cap at 24 months
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
          Adjust the parameters below to see how much your business could save with virtual front desk assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-600" />
                Business Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="dailyCustomerInteractions">Average Daily Customer Interactions</Label>
                <Input
                  id="dailyCustomerInteractions"
                  type="number"
                  value={inputs.dailyCustomerInteractions}
                  onChange={(e) => handleInputChange('dailyCustomerInteractions', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="customerInquiriesPerMonth">Customer Inquiries per Month</Label>
                <Input
                  id="customerInquiriesPerMonth"
                  type="number"
                  value={inputs.customerInquiriesPerMonth}
                  onChange={(e) => handleInputChange('customerInquiriesPerMonth', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="customerServiceCostPerInteraction">Customer Service Cost per Interaction ($)</Label>
                <Input
                  id="customerServiceCostPerInteraction"
                  type="number"
                  value={inputs.customerServiceCostPerInteraction}
                  onChange={(e) => handleInputChange('customerServiceCostPerInteraction', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="currentReceptionHourlyRate">Current Reception/Admin Hourly Rate ($)</Label>
                <Input
                  id="currentReceptionHourlyRate"
                  type="number"
                  value={inputs.currentReceptionHourlyRate}
                  onChange={(e) => handleInputChange('currentReceptionHourlyRate', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="currentCustomerSatisfactionScore">Current Customer Satisfaction Score (%)</Label>
                <Input
                  id="currentCustomerSatisfactionScore"
                  type="number"
                  value={inputs.currentCustomerSatisfactionScore}
                  onChange={(e) => handleInputChange('currentCustomerSatisfactionScore', parseInt(e.target.value) || 0)}
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
                <Label>Service Coordination Hours per Month: {inputs.serviceCoordinationHours}</Label>
                <Slider
                  value={[inputs.serviceCoordinationHours]}
                  onValueChange={(value) => handleInputChange('serviceCoordinationHours', value[0])}
                  max={40}
                  step={2}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>After-Hours Calls per Month: {inputs.afterHoursCallsPerMonth}</Label>
                <Slider
                  value={[inputs.afterHoursCallsPerMonth]}
                  onValueChange={(value) => handleInputChange('afterHoursCallsPerMonth', value[0])}
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
                  <span className="text-gray-700">Customer Retention Value</span>
                  <span className="font-semibold text-blue-600">+{formatCurrency(results.additionalRevenue)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">SymAssist Monthly Cost</span>
                  <span className="font-semibold text-orange-600">{formatCurrency(symAssistMonthlyCost)}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-primary text-white rounded-lg">
                  <span className="font-semibold">Net Monthly Benefit</span>
                  <span className="text-xl font-bold">
                    {results.totalBenefit - symAssistMonthlyCost >= 0 
                      ? formatCurrency(results.totalBenefit - symAssistMonthlyCost)
                      : `-${formatCurrency(Math.abs(results.totalBenefit - symAssistMonthlyCost))}`
                    }
                  </span>
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
                   <span className={`font-bold ${(results.totalBenefit - symAssistMonthlyCost) * 12 >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                     {(results.totalBenefit - symAssistMonthlyCost) * 12 >= 0 
                       ? formatCurrency((results.totalBenefit - symAssistMonthlyCost) * 12)
                       : `-${formatCurrency(Math.abs((results.totalBenefit - symAssistMonthlyCost) * 12))}`
                     }
                   </span>
                 </div>
                <div className="flex justify-between">
                  <span>Time Saved Per Year:</span>
                  <span className="font-bold text-blue-600">
                    {Math.round((results.potentialSavings / inputs.currentReceptionHourlyRate) * 12)} hours
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Customer Interactions Automated:</span>
                  <span className="font-bold text-purple-600">
                    {Math.round(inputs.customerInquiriesPerMonth * 0.85 * 12)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <Button 
              size="lg" 
              variant="brand-blue"
              className="px-8 py-3 text-lg"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              <Brain className="mr-2 h-5 w-5" />
              Book Strategy Call
            </Button>
              <p className="text-sm text-gray-600">
                Get a personalized analysis of your business's automation potential
              </p>
              
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-4">
                  Download our comprehensive guide to virtual front desk automation and see real case studies from successful implementations.
                </p>
              <Button variant="outline" className="mr-3">
                Download ROI Guide
              </Button>
              <Button variant="ghost">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
