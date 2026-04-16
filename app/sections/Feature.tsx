import BenefictsCard from "../components/BenefictsCard";
import CardUsage from "../components/CardUsage";
import TextDescription from "../components/TextDescription";


const workFlowTools =  [
    {name:"Workflow", icon:"/jump.svg"

    },

    {name:"Workflow", icon:"/vector.svg"
        
    },

    {name:"Workflow", icon:"/affiliate.svg"
        
    }

]

const agentTools =  [
    {name:"Agentic Control", icon:"/brain.svg"
        
    },
    {name:"Agentic Control", icon:"/parachute.svg"
        
    },
    {name:"Agentic Control", icon:"/ai-gateway.svg"
        
    }
]

const runTools =  [
    {name:"run tool", icon:"/cloud.svg"
        
    },
    {name:"run tool", icon:"/database.svg"
        
    },
    {name:"run tool", icon:"/bracketss.svg"
        
    }
]

export default function Feature (){
    return(
        <> 
            
        <div>
            <TextDescription styles="flex flex-col md:flex-row items-center md:justify-between  max-w-4xl mx-auto   
            [&>h2]:md:basis-1/3 [&>h2]:md:flex [&>h2]:md:items-center
            [&>p]:md:basis-2/3 [&>p]:md:mt-0   p-10" title="How it works" description="Start by defining your workflow in a simple and structured way, outlining the steps, inputs, and desired outcomes. Then enhance it with embedded knowledge, allowing context, rules, and relevant data to guide every decision. Finally, AI executes the entire process end-to-end, handling each step intelligently and consistently without manual intervention.
            The result is a seamless system where ideas are turned into actions automatically, reducing friction and letting you focus on strategy instead of execution." />
        </div>
           
        <div className="flex flex-col mt-10 sm:flex-row flex-wrap items-center sm:justify-center gap-3 ">
            <CardUsage numeration="1" title="Define Workflow" items={workFlowTools}  />
            <CardUsage numeration="2" title="Embedded Knowledge" items={agentTools}  />
            <CardUsage numeration="3" title="AI executes" items={runTools}  />
        </div>

        <div className=" flex  flex-wrap gap-20 justify-center " >
            <BenefictsCard icon = '/bolt.svg' title="Velocity" description="Accelerate execution by turning structured workflows into automated actions that move instantly from planning to delivery." />
            <BenefictsCard icon = '/cube.svg' title="Clarity" description="Eliminate ambiguity across your operations by keeping every decision, input, and process aligned in a single intelligent system." />
            <BenefictsCard icon = '/ring-.svg' title="Continuity" description="Maintain seamless context across all tasks and teams, ensuring nothing is lost between steps, tools, or handoffs." /> 
            <BenefictsCard icon = '/chart.svg' title="Scale" description="Increase efficiency by reducing manual intervention, minimizing errors, and ensuring consistent execution of tasks." /> 
        </div>
        </>
    )
}