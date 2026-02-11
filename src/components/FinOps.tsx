import { DollarSign, Users, Bell, BarChart3 } from 'lucide-react';

export default function FinOps() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              FinOps Built Into Cloud Operations
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              LeanKloud embeds financial accountability directly into engineering workflows.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Budget and anomaly monitoring</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                  <Bell className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Cost governance enforcement</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Savings opportunity identification</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-xl flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Business unit cost transparency</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-xl flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Continuous optimization execution</h3>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-lg text-gray-700 italic">
                  Finance, engineering, and operations operate from a shared intelligence layer.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <h4 className="text-white text-lg font-semibold mb-4">Monthly Cost Breakdown</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm text-white/80 mb-2">
                      <span>Compute</span>
                      <span>$245,000</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-3/5"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-white/80 mb-2">
                      <span>Data Platforms</span>
                      <span>$128,000</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-2/5"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-white/80 mb-2">
                      <span>Storage</span>
                      <span>$87,000</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-1/4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-white/80 mb-2">
                      <span>Network</span>
                      <span>$52,000</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 w-1/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <p className="text-white/70 text-xs mb-1">This Month</p>
                  <p className="text-white text-2xl font-bold">$512K</p>
                  <p className="text-green-400 text-sm font-semibold">-18% vs last month</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <p className="text-white/70 text-xs mb-1">Budget Usage</p>
                  <p className="text-white text-2xl font-bold">76%</p>
                  <p className="text-blue-400 text-sm font-semibold">On track</p>
                </div>
              </div>

              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-300 text-sm font-semibold mb-1">Cost Optimization Impact</p>
                    <p className="text-white text-xl font-bold">$94,000 saved</p>
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    +15%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
