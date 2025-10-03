import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Lock, Shield } from "lucide-react";

export function InvestorLoginSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-32 w-36 h-36 bg-slate-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-52 h-52 bg-slate-300 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-section text-slate-900 mb-4">Investor Login</h2>
          <p className="text-body text-slate-600 max-w-2xl mx-auto">
            Access your portfolio dashboard, quarterly reports, and exclusive investor resources.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--green-corporate)'}}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Secure Investor Portal</CardTitle>
              <CardDescription>
                Please log in with your investor credentials to access your personalized dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="investor@example.com"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="hover:opacity-80" style={{color: 'var(--green-corporate)'}}>
                  Forgot password?
                </a>
              </div>

              <Button className="w-full" size="lg">
                <Lock className="w-4 h-4 mr-2" />
                Access Portal
              </Button>

              <div className="text-center pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">
                  Don't have access yet?
                </p>
                <Button variant="outline" size="sm">
                  Request Access
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Shield className="w-4 h-4" />
            <span>Bank-level security with 256-bit SSL encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
}