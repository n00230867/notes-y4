# Exercises

1. **Tune k manually**: In Step 4, try n_neighbors = 3, 7, 11 (keep others the same). Re-run Steps 5–6 and record test accuracy. Which k is best here? Why might that be?

		n_neighbors = 5: Test accuracy = 1.000
		n_neighbors = 3: Test accuracy = 0.988
		n_neighbors = 7: Test accuracy = 0.988
		n_neighbors = 11: Test accuracy = 0.988
		
  

2. **Change weights**: In Step 4, set weights="distance". Does the test accuracy change? Inspect the confusion matrix for which species benefited or degraded.

	  No changes happened, the value stayed the same

3. **Try Manhattan distance**: In Step 4, set p=1. Compare to p=2 on this dataset. When might Manhattan be better?

	n_neighbors = 5: p = 1: Test accuracy = 0.988
	n_neighbors = 5: p = 2: Test accuracy = 1.000

	n_neighbors = 3: p = 1: Test accuracy = 0.988
	n_neighbors = 3: p = 2: Test accuracy = 0.988

	n_neighbors = 7: p = 1: Test accuracy = 0.988
	n_neighbors = 7: p = 2: Test accuracy = 0.988

	n_neighbors = 11: p = 1: Test accuracy = 0.988
	n_neighbors = 11: p = 2: Test accuracy = 0.988




- Read this [article](https://medium.com/analytics-vidhya/euclidean-and-manhattan-distance-metrics-in-machine-learning-a5942a8c9f2f)

- Short descriptions of [more Distance Measures](https://www.linkedin.com/pulse/understanding-different-distance-measures-tiago-davi-1f/)  

  
  

4. **Add a feature**: Add Flipper Length (mm) or Body Mass (g) to feature_cols. Re-run Steps 3–6. Did per-class performance improve?

  

5. **Stability check**: Change the random_state in train_test_split (e.g. 0, 21, 99). How stable is accuracy? What does that suggest about variance?

  

6. **Create a new notebook**

 - use this as a template: https://colab.research.google.com/drive/13djxd7aT9LAPv1bDA2iPLHYph-D4PmaA?usp=sharing

 - apply the same steps in the pipeline but for this dataset: https://gist.github.com/MohammedChe/29ec45702afc991321eb4795235cf895