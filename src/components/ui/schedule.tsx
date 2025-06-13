"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function Schedule() {
  const timelineEvents = [
    {
      date: "January 15, 2025",
      title: "Registration Opens",
      description: "Registration for all events begins",
    },
    {
      date: "February 20, 2025",
      title: "Abstract Submission Deadline",
      description: "Last date to submit project abstracts and paper summaries",
    },
    {
      date: "February 28, 2025",
      title: "Shortlisting Announcement",
      description: "Announcement of shortlisted projects and papers",
    },
    {
      date: "March 14, 2025",
      title: "Technical Workshops",
      description: "Pre-event workshops on various technical domains",
    },
    {
      date: "March 15-16, 2025",
      title: "Working Model Competition",
      description: "Main event for project showcase and evaluation",
    },
    {
      date: "March 17, 2025",
      title: "Paper Presentation",
      description: "Research paper presentations and evaluations",
    },
    {
      date: "March 17, 2025",
      title: "Award Ceremony",
      description: "Announcement of winners and prize distribution",
    },
  ]

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Timeline</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">Key dates and milestones for Prakalpa 2025</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:translate-x-[-0.5px]"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8",
                  index % 2 === 0 ? "md:text-right" : "",
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary transform md:translate-x-[-8px]"></div>

                {/* Content positioning based on even/odd */}
                {index % 2 === 0 ? (
                  <>
                    <div className={cn("md:pr-8", index % 2 === 0 ? "md:col-start-1" : "md:col-start-2")}>
                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardContent className="p-6">
                          <p className="text-primary font-medium mb-2">{event.date}</p>
                          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block"></div>
                    <div className="md:pl-8">
                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardContent className="p-6">
                          <p className="text-primary font-medium mb-2">{event.date}</p>
                          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
