### Monday
LLM's don't store copies if training data. The model we download is a structure of parameters (patterns + relationships) learned from the original training data, not the data itself.

Ollama is a free, open-source platform that lets you download and run large language models (LLMs) directly on your own computer. 


Why?
Quantization is a technique used to make models smaller and faster by reducing the precision of their numbers (parameters).
- Reduces model size, from GB - Mb
- Improves speed.
- Lowers memory usage (this helps run the LLMs on local machines).

A reasoning model is an AI that pauses to "think" and work through a problem step-by-step before giving you a final answer.

================================================================================================================================================================================================================================================
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

#### **Post-training**
- Refers to training a model from scratch

- For LLMs, pre-training often involves training a model for text completion

- Out of all training steps, pre-training is often the most resource intensive by a long shot

- Takes a long time to do

- A small mistake during pre-training can incur a significant financial loss and set back the project significantly

- Due to the resource-intensive nature of pre-training, this has become an art that only a few practice. Those with expertise in pre-training large models, however, are heavily sought after.

#### **Finetuning**

Finetuning means continuing to train a previously trained model, the model weights are obtained from the previous training process. Because the model already has certain knowledge from pre-training, finetuning typically requires fewer resources (e.g., data and compute) than pre-training.

#### **Post-training**

- Many people use post-training to refer to the process of training a model after the pre-training phase

- Conceptually, post-training and finetuning are the same and can be used interchangeably. However, sometimes, people might use them differently to signify the different goals

- It’s usually post-training when it’s done by model developers. For example, OpenAI might post-train a model to make it better at following instructions before releasing it.

- It’s finetuning when it’s done by application developers. For example, you might finetune an OpenAI model (which might have been post-trained itself) to adapt it to your needs.

### What is Dataset Engineering?

- **Dataset engineering** = collecting, creating, cleaning, and labeling data used to **train and adapt AI models**.
    


What does it mean when an ML is closed or open ended?
It refers to ==how much access the public has to its inner workings, code, weights (the learned parameters), and training data==
### Traditional ML vs Foundation Models

|Traditional ML|Foundation Models|
|---|---|
|Usually **close-ended**|Usually **open-ended**|
|Limited possible outputs|Many possible outputs|
|Example: Spam / Not Spam|Example: Writing an essay|
|Easier to label data|Harder to label data|
|Often uses **tabular data**|Often uses **unstructured data**|

### Why is annotation harder for AI?

- In traditional ML, it is easy to decide the correct answer.
    
- Example: Is an email **spam or not spam?**
    
- For foundation models, answers can be long and varied.
    
- Example: Judging the quality of an **essay** is much harder.
    
- Therefore, **data annotation is a bigger challenge** for AI engineering.
    

### Data Work in AI Engineering

AI engineers often focus on:

- **Deduplication** → removing duplicate data
    
- **Tokenization** → breaking text into smaller pieces/tokens
    
- **Context retrieval** → finding relevant information for the model
    
- **Quality control** → checking and improving data quality
    
- **Sensitive information removal** → removing private/personal information
    
- **Toxic data removal** → removing harmful or inappropriate content
    

### Key Takeaway

**Dataset engineering for AI is mainly about preparing high-quality, diverse, and safe data for open-ended models.**


# **Sampling**

### **Sampling Strategies**

- Choosing the right sampling strategy helps your model produce responses that fit your needs. Some strategies make the model's replies more creative. Others make them more predictable.

- Many different sample strategies have been introduced to nudge models toward responses with specific attributes.

- Common sampling strategies are:
https://www.youtube.com/watch?v=ciCt3bDnrEs
https://vibeengines.com/tools/llm-sampling-simulator?utm_source=chatgpt.com