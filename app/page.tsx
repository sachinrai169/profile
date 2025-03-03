import { Code, Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Sachin B S</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <Download className="h-4 w-4" /> Resume
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Sachin B S</h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">Senior Full Stack / Lead Developer</h2>
            <p className="text-lg text-muted-foreground max-w-md">JavaScript / Angular / React / Java / DevOps / AWS</p>
            <div className="flex gap-3 pt-4">
              <Button className="gap-2">
                <Mail className="h-4 w-4" /> Contact Me
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" /> Download CV
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://www.linkedin.com/in/sachin-rai-582263129/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="mailto:sachin.rai02019@gmail.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="tel:+918105391994" className="text-muted-foreground hover:text-foreground">
                <Phone className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0175-N39Sz3TU4aJuneQmxCJS88i8wakbBD.jpeg"
                alt="Sachin B S"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A result-oriented professional with over 7 years of extensive experience in full-stack development,
                specializing in cloud-based software services. Adept at tackling new challenges in application
                development by leveraging a unique blend of creative thinking and technical skills.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Programming Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Python</Badge>
                    <Badge>Java</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Frontend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Angular</Badge>
                    <Badge>React</Badge>
                    <Badge>Single SPA</Badge>
                    <Badge>Ionic</Badge>
                    <Badge>Vue.js</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Backend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>ExpressJS</Badge>
                    <Badge>Flask</Badge>
                    <Badge>NestJS</Badge>
                    <Badge>NodeJS</Badge>
                    <Badge>SpringBoot</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Cloud & DevOps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Kubernetes</Badge>
                    <Badge>Terraform</Badge>
                    <Badge>CDKTF</Badge>
                    <Badge>CI/CD</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Databases</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>PostgreSQL</Badge>
                    <Badge>MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Testing & Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Cypress</Badge>
                    <Badge>Jasmine</Badge>
                    <Badge>Karma</Badge>
                    <Badge>Git</Badge>
                    <Badge>Figma</Badge>
                    <Badge>NSIS</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>

            <div className="space-y-8">
              {/* Current Job */}
              <div className="relative pl-8 border-l-2 border-muted pb-8">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold">Senior Full Stack Developer</h3>
                    <Badge variant="outline" className="w-fit">
                      Mar 2022 – Present
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">E-Mobility Cloud Platform</p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>
                      Architected and developed a cloud-based software service (CMS) for E-Mobility using Angular,
                      React, NodeJS, and AWS, focusing on monitoring, reporting, scheduling, and managing charging
                      operations within depot chargers.
                    </li>
                    <li>
                      Innovated a scheduling system for vehicle charging and optimized charger allocation for day-ahead
                      operations using TypeScript, ensuring efficient resource management.
                    </li>
                    <li>
                      Led charger management initiatives by integrating remote command functionalities to control
                      chargers with various AWS services, including S3, EC2, ECR, Cognito, Amplify, DynamoDB,
                      CloudWatch, and SES.
                    </li>
                    <li>
                      Drove the development and deployment of micro front-end architectures using Single SPA, enhancing
                      platform scalability.
                    </li>
                    <li>
                      Designed an automation pipeline using Cypress, integrated with GitHub Actions for streamlined
                      development processes.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mindtree */}
              <div className="relative pl-8 border-l-2 border-muted pb-8">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold">Senior Software Engineer / Front End Developer</h3>
                    <Badge variant="outline" className="w-fit">
                      Jan 2020 – Mar 2022
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">Mindtree Ltd, Bangalore, IN</p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>
                      Architected and developed a product for Tanishq to streamline their billing process using Angular,
                      React, NestJS, integrating multiple payment gateways for enhanced convenience.
                    </li>
                    <li>Developed a Windows installable using NSIS to access OS-related information securely.</li>
                    <li>Gained proficiency in NgRx state management and NX development tools for monorepos.</li>
                    <li>Developed web services utilizing NestJS.</li>
                    <li>
                      Contributed to multiple Proofs of Concept and successfully produced a prototype that was put into
                      production.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Infosys */}
              <div className="relative pl-8 border-l-2 border-muted">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold">System Engineer / Full Stack Developer</h3>
                    <Badge variant="outline" className="w-fit">
                      Jan 2018 – Jan 2020
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">Infosys</p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>
                      Designed and developed the Infosys Assessments Platform using Java, SpringBoot, Angular, React as
                      part of the Wingspan product suite to automate technological assessments and coding processes.
                    </li>
                    <li>
                      Spearheaded the prototyping of new product features every quarter driving continuous innovation.
                    </li>
                    <li>
                      Achieved a 25% enhancement in user experience scores through design and implementation strategies.
                    </li>
                    <li>
                      Utilized SpringBoot to architect and implement RESTful web services optimizing performance and
                      functionality.
                    </li>
                    <li>
                      Engineered an automation script leveraging Jenkins streamlining build and deployment operations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>

            <Tabs defaultValue="emobility" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:w-[600px]">
                <TabsTrigger value="emobility">E-Mobility Dashboard</TabsTrigger>
                <TabsTrigger value="tanishq">Tanishq Billing</TabsTrigger>
                <TabsTrigger value="assessments">Assessments Platform</TabsTrigger>
              </TabsList>

              <TabsContent value="emobility" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>React-based Dashboard for E-Mobility Management</CardTitle>
                    <CardDescription>
                      A comprehensive dashboard for monitoring and managing E-Mobility operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <Code className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>
                          Developed a comprehensive dashboard using React to monitor and manage E-Mobility operations
                        </li>
                        <li>Implemented real-time data visualization features using React and D3.js</li>
                        <li>
                          Enhanced user experience by integrating React Router for seamless navigation and Redux for
                          state management
                        </li>
                        <li>Optimized performance through code splitting and lazy loading techniques</li>
                        <li>Ensured cross-browser compatibility and responsiveness across various devices</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">D3.js</Badge>
                      <Badge variant="secondary">Redux</Badge>
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tanishq" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tanishq Billing System</CardTitle>
                    <CardDescription>
                      A streamlined billing process with multiple payment gateway integrations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <Code className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Architected and developed a product for Tanishq to streamline their billing process</li>
                        <li>Integrated multiple payment gateways for enhanced customer convenience</li>
                        <li>Built with Angular, React, and NestJS for a robust full-stack solution</li>
                        <li>Implemented NgRx for state management</li>
                        <li>Utilized NX development tools for monorepo management</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Angular</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">NestJS</Badge>
                      <Badge variant="secondary">NgRx</Badge>
                      <Badge variant="secondary">NX</Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="assessments" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Infosys Assessments Platform</CardTitle>
                    <CardDescription>
                      Part of the Wingspan product suite to automate technological assessments
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <Code className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Designed and developed the Infosys Assessments Platform</li>
                        <li>Automated technological assessments and coding processes</li>
                        <li>Spearheaded the prototyping of new product features every quarter</li>
                        <li>Achieved a 25% enhancement in user experience scores</li>
                        <li>Implemented RESTful web services with SpringBoot</li>
                        <li>Created automation scripts with Jenkins for streamlined build and deployment</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">SpringBoot</Badge>
                      <Badge variant="secondary">Angular</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Jenkins</Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 scroll-mt-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>

            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <CardTitle>B.E. in Computer Science and Engineering</CardTitle>
                  <Badge variant="outline">Graduated: 2017</Badge>
                </div>
                <CardDescription>Mangalore Institute of Technology, Karnataka, IN</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a href="mailto:sachin.rai02019@gmail.com" className="text-primary hover:underline">
                      sachin.rai02019@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <a href="tel:+918105391994" className="text-primary hover:underline">
                      +91-8105391994
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://www.linkedin.com/in/sachin-rai-582263129/"
                      target="_blank"
                      className="text-primary hover:underline"
                      rel="noreferrer"
                    >
                      linkedin.com/in/sachin-rai-582263129
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full px-3 py-2 border rounded-md text-sm"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full px-3 py-2 border rounded-md text-sm min-h-[120px]"
                        placeholder="Your message..."
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sachin B S. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/sachin-rai-582263129/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://github.com/" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="mailto:sachin.rai02019@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

