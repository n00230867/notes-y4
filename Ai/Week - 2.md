### Monday
LLM's don't store copies if training data. The model we download is a structure of parameters (patterns + relationships) learned from the original training data, not the data itself.

Ollama is a free, open-source platform that lets you download and run large language models (LLMs) directly on your own computer. 


Why?
Quantization is a technique used to make models smaller and faster by reducing the precision of their numbers (parameters).
- Reduces model size, from GB - Mb
- Improves speed.
- Lowers memory usage (this helps run the LLMs on local machines).

A reasoning model is an AI that pauses to "think" and work through a problem step-by-step before giving you a final answer.

### Friday
The Ai Engineering Stack
- Ai endgi evolved out of MK engi.
- Ai engi and ML engi have significant overlap.
- Existing ML engi can add Ai engi to their list of skills to expand their job prospects. However, there are also Ai engi with no previous ML Xp.

##### Three Layers of the Ai Stack
When developing an AI application, you’ll likely start from the top layer and move down as needed:

- **Application development**

With models readily available, anyone can use them to develop applications. This is the layer that has seen the most action in the last two years, and it is still rapidly evolving. Application development involves providing a model with good prompts and necessary context. This layer requires rigorous evaluation. Good applications also demand good interfaces.

- **Model development**

This layer provides tooling for developing models, including frameworks for modeling, training, finetuning, and inference optimization. Because data is central to model development, this layer also contains dataset engineering. Model development also requires rigorous evaluation.

- **Infrastructure**

At the bottom is the stack is infrastructure, which includes tooling for model serving, managing data and compute, and monitoring. hi

- **Prompting:** Tell the LM **what to do** using instructions/context. → _Model stays the same._
    
- **Fine-tuning:** Change the model’s **weights/parameters** using training data. → _You adapt the model itself._

