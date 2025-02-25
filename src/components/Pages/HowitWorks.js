import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            How <span className="text-green-500">Azlon</span> Works
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Discover the revolutionary autonomous code generation and testing process that ensures your data science and machine learning code works perfectly, every time.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">The Autonomous Feedback Loop</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Azlon's core innovation is its continuous self-correcting feedback loop that generates, tests, and refines code until it perfectly meets your requirements.
            </p>
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 inset-y-0 w-1 bg-green-500 rounded"></div>

              {/* Process steps */}
              <div className="relative pl-8 pb-8">
                <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-black border-4 border-green-500"></div>
                <h3 className="text-lg font-bold text-gray-900">1. User Input</h3>
                <p className="mt-2 text-gray-600">
                  You provide a natural language description of what you want to achieve, such as "Create a Python script to analyze sales data from sales.csv and plot monthly trends." You can also upload CSV files, data files, or even program files that represent the current state of your project.
                </p>
              </div>

              <div className="relative pl-8 pb-8">
                <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-black border-4 border-green-500"></div>
                <h3 className="text-lg font-bold text-gray-900">2. Initial Code Generation</h3>
                <p className="mt-2 text-gray-600">
                  Azlon leverages state-of-the-art Large Language Models to interpret your requirements and generate code tailored to your specific task. This includes not just the main functionality but also necessary Dockerfiles to create an isolated testing environment.
                </p>
              </div>

              <div className="relative pl-8 pb-8">
                <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-black border-4 border-green-500"></div>
                <h3 className="text-lg font-bold text-gray-900">3. Docker Container Creation</h3>
                <p className="mt-2 text-gray-600">
                  Azlon generates a Dockerfile appropriate for your application. For example, if your task involves Python data analysis, it might create a Docker container using a Python 3.10 slim base image with the necessary dependencies installed and your code files included.
                </p>
              </div>

              <div className="relative pl-8 pb-8">
                <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-black border-4 border-green-500"></div>
                <h3 className="text-lg font-bold text-gray-900">4. Automated Testing</h3>
                <p className="mt-2 text-gray-600">
                  The container is built and executed automatically. Your code runs in this isolated environment, and the output is captured. This is a crucial step where Azlon actually runs the code instead of just generating it, ensuring it works as expected.
                </p>
              </div>

              <div className="relative pl-8 pb-8">
                <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-black border-4 border-green-500"></div>
                <h3 className="text-lg font-bold text-gray-900">5. Output Evaluation</h3>
                <p className="mt-2 text-gray-600">
                  The LLM analyzes the output from the execution to determine if it fulfills your requirements. It checks for errors, exceptions, and whether the results match your expected output criteria. This is where Azlon's intelligence truly shines—it understands what "success" looks like for your specific task.
                </p>
              </div>

              <div className="relative pl-8 pb-8">
                <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-green-500"></div>
                <h3 className="text-lg font-bold text-gray-900">6. Autonomous Refinement</h3>
                <p className="mt-2 text-gray-600">
                  If the output doesn't meet the requirements or contains errors, Azlon doesn't give up. It identifies the specific issues, regenerates or modifies the code to address them, and starts the testing process again. This cycle continues autonomously until the code produces the correct output.
                </p>
                <div className="mt-4 bg-gray-100 p-4 rounded-md border-l-4 border-green-500">
                  <p className="text-sm text-gray-700 italic">
                    "Unlike traditional AI coding tools that simply generate code and leave debugging to you, Azlon takes full responsibility for producing working solutions. It's like having a tireless programmer who won't stop until the job is done right."
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-black border-4 border-green-500"></div>
                <h3 className="text-lg font-bold text-gray-900">7. Solution Delivery</h3>
                <p className="mt-2 text-gray-600">
                  Once the requirements are fully met, Azlon presents you with the final solution. You can preview the generated code files directly in the browser and download them as a zip file, ready to use on your local machine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Technical Deep Dive</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Under the hood, Azlon combines several cutting-edge technologies to create a seamless autonomous coding experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Containerization Technology</h3>
              <p className="text-gray-600">
                Azlon uses Docker to create isolated environments for testing your code. This ensures that all dependencies are properly managed and that the code runs in a consistent, controlled environment. The Docker containers are created on-the-fly based on your specific requirements.
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-md">
                <pre className="text-xs text-gray-700 overflow-x-auto">
{`# Example Dockerfile generated by Azlon
FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENTRYPOINT ["python", "main.py"]`}
                </pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">LLM Integration</h3>
              <p className="text-gray-600">
                Azlon's core intelligence comes from its use of advanced Large Language Models. These models are fine-tuned specifically for code generation and evaluation tasks, with particular emphasis on data science and machine learning applications.
              </p>
              <p className="mt-2 text-gray-600">
                Our models understand both natural language instructions and programming concepts, allowing them to bridge the gap between what you want to achieve and the code needed to get there.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Science Focus</h3>
              <p className="text-gray-600">
                Azlon is specifically optimized for data science and machine learning tasks, with built-in capabilities for:
              </p>
              <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                <li>CSV file processing and data cleaning</li>
                <li>Statistical analysis and feature engineering</li>
                <li>Data visualization with libraries like Matplotlib, Seaborn, and Plotly</li>
                <li>Machine learning model training and evaluation</li>
                <li>Natural language processing tasks</li>
                <li>Time series analysis and forecasting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security and Privacy</h3>
              <p className="text-gray-600">
                Your code and data are processed in isolated containers that are destroyed after use. Azlon never stores your uploaded files or generated code beyond the duration of your session unless you explicitly choose to save them.
              </p>
              <p className="mt-2 text-gray-600">
                All processing happens on secure, dedicated servers with industry-standard encryption for data in transit and at rest.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Example Scenarios Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Example Scenarios</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              See how Azlon handles real-world data science challenges through its autonomous feedback loop.
            </p>
          </div>

          <div className="space-y-12">
            {/* Scenario 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-black text-white">
                <h3 className="text-xl font-bold">Scenario 1: CSV Data Analysis</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">User Request:</h4>
                  <p className="text-gray-700 italic">"I have a CSV file with customer purchase data. Can you create a script that shows the monthly sales trends and identifies the top 5 products by revenue?"</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Step 1: Initial Code Generation</h4>
                  <p className="text-gray-700">Azlon generates Python code using pandas for data processing and matplotlib for visualization.</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Step 2: Testing & Error Detection</h4>
                  <p className="text-gray-700">When executed, Azlon detects that the date column format doesn't match the parsing code, resulting in an error.</p>
                  <div className="mt-2 bg-red-50 p-3 rounded-md text-red-700 text-sm">
                    <p>Error: time data '01/15/2023' does not match format '%Y-%m-%d'</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Step 3: Autonomous Correction</h4>
                  <p className="text-gray-700">Azlon automatically modifies the date parsing code to match the actual format in the CSV.</p>
                  <div className="mt-2 bg-green-50 p-3 rounded-md text-green-700 text-sm">
                    <p>Corrected: Changed <code>pd.to_datetime(df['date'], format='%Y-%m-%d')</code> to <code>pd.to_datetime(df['date'], format='%m/%d/%Y')</code></p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Final Result:</h4>
                  <p className="text-gray-700">Azlon delivers working Python code that correctly processes the CSV, generates monthly sales trend charts, and lists the top 5 products by revenue.</p>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-black text-white">
                <h3 className="text-xl font-bold">Scenario 2: Machine Learning Classification</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">User Request:</h4>
                  <p className="text-gray-700 italic">"I have a dataset of customer information and want to predict which customers are likely to churn. Create a machine learning model with at least 80% accuracy."</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Autonomous Cycle:</h4>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li><span className="font-medium">Iteration 1:</span> Generates Random Forest model achieving 73% accuracy.</li>
                    <li><span className="font-medium">Iteration 2:</span> Adds feature engineering to improve model, reaches 76% accuracy.</li>
                    <li><span className="font-medium">Iteration 3:</span> Implements hyperparameter tuning with cross-validation, reaches 79% accuracy.</li>
                    <li><span className="font-medium">Iteration 4:</span> Adds ensemble approach combining Random Forest and Gradient Boosting, reaches 82% accuracy.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Final Result:</h4>
                  <p className="text-gray-700">Azlon delivers a complete machine learning pipeline that preprocesses the data, engineers relevant features, trains an ensemble model, and achieves 82% prediction accuracy—exceeding the user's requirement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Azlon's autonomous coding process.
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gray-900">What programming languages does Azlon support?</h3>
              <p className="mt-2 text-gray-600">
                Azlon currently focuses on Python for data science and machine learning applications. This includes popular libraries such as pandas, numpy, scikit-learn, TensorFlow, PyTorch, and visualization tools like matplotlib and seaborn.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">How does Azlon handle large datasets?</h3>
              <p className="mt-2 text-gray-600">
                Azlon can process datasets of various sizes. For very large datasets, it employs efficient data processing techniques such as chunking, sampling for initial model development, and optimized code generation for production use.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">Can I modify the code after Azlon generates it?</h3>
              <p className="mt-2 text-gray-600">
                Absolutely! All code generated by Azlon is provided as standard Python files that you can modify, extend, or integrate into larger projects. The code follows best practices and includes comments to make it easy to understand and adapt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">How long does the autonomous process typically take?</h3>
              <p className="mt-2 text-gray-600">
                Processing time varies based on the complexity of the task. Simple data processing tasks might complete in under a minute, while complex machine learning models with multiple iterations could take several minutes. Azlon keeps you updated on progress throughout the process.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">What makes Azlon different from other AI coding tools?</h3>
              <p className="mt-2 text-gray-600">
                The key difference is Azlon's autonomous feedback loop. While other tools generate code and leave testing and debugging to you, Azlon actively tests the code, identifies issues, and refines the solution until it works correctly—all without human intervention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to experience autonomous coding?
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-300">
              Join the revolution in data science development with Azlon.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-400">
                  Get Started For Free
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link to="/demo" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-500 bg-black border-green-500 hover:bg-gray-900">
                  See a Live Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;