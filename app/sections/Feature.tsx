import CardUsage from "../components/CardUsage";


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
        <div className="flex flex-col sm:flex-row flex-wrap items-center sm:justify-center gap-3 ">
            <CardUsage numeration="1" title="Define Workflow" items={workFlowTools}  />
            <CardUsage numeration="2" title="Embedded Knowledge" items={agentTools}  />
            <CardUsage numeration="3" title="AI executes" items={runTools}  />
        </div>
        </>
    )
}